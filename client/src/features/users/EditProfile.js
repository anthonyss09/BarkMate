import Wrapper from "../../assets/wrappers/FormEditProfileW";
import HomeNav from "../../app/HomeNav";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useRef } from "react";
import AddressInput from "../../components/AddressInput";
import ProfileImageInput from "../../components/ProfileImageInput";
import { useState } from "react";
import FormCheckbox from "../auth/FormCheckbox";
import Footer from "../../app/Footer";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "./UsersSlice";
import DotLoader from "react-spinners/DotLoader";
import axios from "axios";
import {
  useEditAllPostsByUserMutation,
  useEditAllCommentsByUserMutation,
} from "../posts/PostsSlice";
import { useEditAllChatsByUserMutation } from "../chats/ChatsSlice";
import { useEditAllNotificationsByUserMutation } from "../notifications/NotificationsSlice";
import { useEditAllFriendsByUserMutation } from "../friends/FriendsSlice";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";

export default function EditProfile() {
  const user = useSelector(selectCurrentUser);
  const inputRef = useRef();

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [updateUser] = useUpdateUserMutation();
  const [editAllPostsByUser] = useEditAllPostsByUserMutation();
  const [editAllChatsByUser] = useEditAllChatsByUserMutation();
  const [editAllNotificationsByUser] = useEditAllNotificationsByUserMutation();
  const [editAllFriendsByUser] = useEditAllFriendsByUserMutation();
  const [editAllCommentsByUser] = useEditAllCommentsByUserMutation();

  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState(user.profileImageUrl);
  const [location, setLocation] = useState(user.location.coordinates);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [timeAvailable, setTimeAvailable] = useState(user.timeAvailable);
  const [timeNeeded, setTimeNeeded] = useState(user.timeNeeded);
  const [aboutUs, setAboutUs] = useState(user.aboutUs);
  const [savingProfileEdit, setSavingProfileEdit] = useState(false);

  const handlePlaceChanged = async () => {
    try {
      const [place] = await inputRef.current.getPlaces();
      if (place) {
        const long = place.geometry.location.lng();
        const lat = place.geometry.location.lat();
        const city = place.address_components[2].long_name;
        const address = place.formatted_address;

        // console.log(lat, long);
        setLocation([long, lat]);
        setAddress(address);
        setCity(city);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
    const objUrl = URL.createObjectURL(image);
    setImageUrl(objUrl);
  };

  const handleInputChange = (e) => {
    setAboutUs(e.target.value);
    console.log(aboutUs);
  };

  const handleCheckboxChange = ({ id, value }) => {
    console.log(id, value);
    if (id === "timeAvailable") {
      setTimeAvailable(value);
    } else if (id === "timeNeeded") {
      setTimeNeeded(value);
    }
  };

  const handleDiscardEdits = (e) => {
    e.preventDefault();
    setAboutUs("");
    setAddress("");
    setImageUrl("");
    setProfileImage("");
    setLocation("");
    setTimeAvailable("");
    setTimeNeeded("");
    Navigate("/userProfile");
  };

  const handleSaveEdits = async (e) => {
    e.preventDefault();

    if (user.profileName === "Demo") {
      dispatch(
        displayAlert({
          alertType: "danger",
          alertMessage: "Create a profile to save edits.",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      return;
    }
    const update = {
      profileImageUrl: imageUrl,
      address,
      city,
      location: { type: "Point", coordinates: location },
      aboutUs,
      timeNeeded,
      timeAvailable,
      profileName: user.profileName,
    };

    setSavingProfileEdit(true);

    if (profileImage) {
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", profileImage);
      cloudinaryFormData.append("upload_preset", "bark_mate_standard_pics");
      try {
        const cloudinaryResult = await axios.post(
          "https://api.cloudinary.com/v1_1/dgrtldcsp/image/upload",
          cloudinaryFormData
        );

        update.profileImageUrl = cloudinaryResult.data.secure_url;
        setSavingProfileEdit(false);
      } catch (error) {
        console.log(error);
        setSavingProfileEdit(false);
      }
    }

    try {
      const updatedUser = await updateUser({ userId: user._id, update });
      const updatedUserPosts = await editAllPostsByUser({
        userId: user._id,
        update,
      });
      await editAllChatsByUser({
        userId: user._id,
        update,
      });
      await editAllNotificationsByUser({
        userId: user._id,
        update,
      });
      await editAllFriendsByUser({
        userId: user._id,
        update,
      });
      await editAllCommentsByUser({
        userId: user._id,
        update,
      });
      console.log(updatedUserPosts);
      console.log(updatedUser);
      setAboutUs("");
      setAddress("");
      setImageUrl("");
      setProfileImage("");
      setLocation("");
      setTimeAvailable("");
      setTimeNeeded("");
      Navigate("/userProfile");
      setSavingProfileEdit(false);
    } catch (error) {
      console.log(error);
      setSavingProfileEdit(false);
    }
  };

  return (
    <Wrapper>
      <HomeNav />
      {savingProfileEdit && (
        <div className="alert-container">
          <DotLoader color="lightBlue" size={85} className="beat-loader" />
        </div>
      )}
      <form className="edit-profile-main form">
        <div className="edit-profile-center">
          <h3 className="form-row edit-profile-heading">Edit Profile</h3>

          <h1 className="edit-profile-name">{user.profileName}</h1>

          {!profileImage && (
            <img
              src={user.profileImageUrl}
              className="profile-input-image"
              alt="user profile"
            />
          )}
          <ProfileImageInput
            handleImageChange={handleImageChange}
            imageUrl={imageUrl}
            profileImage={profileImage}
          />

          <AddressInput
            inputRef={inputRef}
            handlePlaceChanged={handlePlaceChanged}
            userAddress={user.address}
          />

          <div className="form-row">
            <label htmlFor="aboutUs" className="form-label">
              About us
            </label>
            <textarea
              id="aboutUs"
              name="About us"
              rows="5"
              placeholder={user.aboutUs}
              className="form-textarea"
              onChange={handleInputChange}
            />
          </div>

          <FormCheckbox
            label="Time available"
            id="timeAvailable"
            handleCheckboxChange={handleCheckboxChange}
            inputs={["mornings", "afternoons", "evenings"]}
          />

          <FormCheckbox
            label="Time needed"
            id="timeNeeded"
            handleCheckboxChange={handleCheckboxChange}
            inputs={["mornings", "afternoons", "evenings"]}
          />
        </div>
        <div className="edit-profile-buttons">
          <button
            className="btn btn-edit btn-discard"
            onClick={handleDiscardEdits}
          >
            Discard
          </button>
          <button className="btn btn-edit btn-save" onClick={handleSaveEdits}>
            Save
          </button>
        </div>
      </form>
      <Footer />
    </Wrapper>
  );
}
