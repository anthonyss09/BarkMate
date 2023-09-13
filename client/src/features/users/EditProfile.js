import Wrapper from "../../assets/wrappers/FormW";
import HomeNav from "../../app/HomeNav";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useRef } from "react";
import AddressInput from "../../components/AddressInput";
import ProfileImageInput from "../../components/ProfileImageInput";
import { useState } from "react";
import FormCheckbox from "../auth/FormCheckbox";
import Footer from "../../app/Footer";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../auth/authSlice";
import { useUploadPicMutation } from "../uploads/UploadsSlice";
import { useRefreshUserCredentialsQuery } from "../auth/authSlice";

export default function EditProfile() {
  const user = useSelector(selectCurrentUser);
  const inputRef = useRef();

  const Navigate = useNavigate();

  // const urlPre = "../../data/uploads/";
  const [updateUser] = useUpdateUserMutation();
  const [uploadPic] = useUploadPicMutation();

  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState(user.profileImageUrl);
  const [location, setLocation] = useState(user.location.coordinates);
  const [address, setAddress] = useState(user.address);
  const [timeAvailable, setTimeAvailable] = useState(user.timeAvailable);
  const [timeNeeded, setTimeNeeded] = useState(user.timeNeeded);
  const [aboutUs, setAboutUs] = useState(user.aboutUs);

  const handlePlaceChanged = async () => {
    try {
      const [place] = await inputRef.current.getPlaces();
      if (place) {
        const long = place.geometry.location.lng();
        const lat = place.geometry.location.lat();

        const address = place.formatted_address;

        console.log(lat, long);
        setLocation([long, lat]);
        setAddress(address);
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
    const update = {
      profileImageUrl: imageUrl,
      address,
      location: { type: "Point", coordinates: location },
      aboutUs,
      timeNeeded,
      timeAvailable,
      userId: user._id,
    };

    if (profileImage) {
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", profileImage);
      cloudinaryFormData.append("upload_preset", "bark_mate_standard_pics");
      try {
        const cloudinaryResult = await uploadPic(cloudinaryFormData);

        update.profileImageUrl = cloudinaryResult.data.secure_url;
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const updatedUser = await updateUser(update);
      console.log(updatedUser);
      setAboutUs("");
      setAddress("");
      setImageUrl("");
      setProfileImage("");
      setLocation("");
      setTimeAvailable("");
      setTimeNeeded("");
      Navigate("/userProfile");
    } catch (error) {}
  };

  return (
    <Wrapper>
      <HomeNav />
      <section className="edit-profile-main form">
        <div className="edit-profile-center">
          <h1 className="form-row edit-profile-heading">Edit Profile</h1>

          <h1 className="edit-profile-name">
            {user.firstName + " & " + user.dogName}
          </h1>

          {!profileImage && (
            <img src={user.profileImageUrl} className="profile-input-image" />
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
              value={aboutUs}
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
      </section>
      <Footer />
    </Wrapper>
  );
}
