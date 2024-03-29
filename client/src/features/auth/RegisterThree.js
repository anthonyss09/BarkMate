import Wrapper from "../../assets/wrappers/FormRegisterW";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormCheckbox from "./FormCheckbox";
import { useSelector, useDispatch } from "react-redux";
import { selectNewUser } from "./authSlice";
import { useRegisterUserMutation } from "../auth/authSlice";
import { useCreatePostMutation } from "../posts/PostsSlice";
import ProfileImageInput from "../../components/ProfileImageInput";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";

export default function RegisterThree({
  handleInputChange,
  handleCheckboxChange,
  showRegisterThree,
}) {
  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [requesting, setRequesting] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const [createPost] = useCreatePostMutation();
  const Navigate = useNavigate();

  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
    const objUrl = URL.createObjectURL(image);
    setImageUrl(objUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const copyOfUser = { ...newUser };
    copyOfUser.profileName = newUser.firstName + " & " + newUser.dogName;

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", profileImage);
    cloudinaryFormData.append("upload_preset", "bark_mate_standard_pics");
    setRequesting(true);

    let cloudinaryResult;
    try {
      cloudinaryResult = await axios.post(
        "https://api.cloudinary.com/v1_1/dgrtldcsp/image/upload",
        cloudinaryFormData
      );
    } catch (error) {
      setRequesting(false);
      dispatch(
        displayAlert({
          alertType: "danger",
          alertMessage: "Error loading media file.",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
    }

    copyOfUser.profileImageUrl = cloudinaryResult.data.secure_url;

    const response = await registerUser(copyOfUser);
    console.log(response);
    setRequesting(false);
    const post = {
      text: "This is our first post!",
      authorId: response.data.user._id,
      coordinates: response.data.user.location.coordinates,
      authorImageUrl: response.data.user.profileImageUrl,
      authorName: response.data.user.firstName,
      authorDogName: response.data.user.dogName,
      authorProfileName: response.data.user.profileName,
      postImageUrl: response.data.user.profileImageUrl,
    };
    const newPost = await createPost(post);
    const newRecipient = axios.post("/api/transports/add-recipient", {
      userId: response.data.user._id,
      emailAddress: response.data.user.email,
    });
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    Navigate("/dashboard/home");
  };

  return (
    <Wrapper>
      {requesting && (
        <div className="alert-container">
          {" "}
          <DotLoader size={85} color="lightBlue" className="beat-loader" />
        </div>
      )}

      <form
        encType="multipart/form-data"
        className="form form-three"
        onSubmit={handleSubmit}
      >
        <div className="form-header">Finish profile</div>

        <ProfileImageInput
          profileImage={profileImage}
          handleImageChange={handleImageChange}
          imageUrl={imageUrl}
        />
        <div className="form-row">
          <label htmlFor="aboutUs" className="form-label">
            About us
          </label>
          <textarea
            id="aboutUs"
            name="About us"
            rows="5"
            placeholder="Introduce you and pup!"
            className="form-textarea"
            onChange={handleInputChange}
          />
        </div>
        <FormCheckbox
          label="Time needed"
          id="timeNeeded"
          handleCheckboxChange={handleCheckboxChange}
          inputs={["mornings", "afternoons", "evenings"]}
        />
        <FormCheckbox
          label="Time available"
          id="timeAvailable"
          handleCheckboxChange={handleCheckboxChange}
          inputs={["mornings", "afternoons", "evenings"]}
        />
        <button
          className="btn btn-register"
          disabled={requesting}
          onClick={() => {
            console.log("submitted");
          }}
        >
          Finish
        </button>
      </form>
    </Wrapper>
  );
}
