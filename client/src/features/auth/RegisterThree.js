import Wrapper from "../../assets/wrappers/FormRegisterW";
import Logo from "../../components/Logo";
import FormSteps from "./FormSteps";
import { Link, useNavigate } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
import FormCheckbox from "./FormCheckbox";
import { useSelector } from "react-redux";
import { selectNewUser } from "./authSlice";
import { useRegisterUserMutation } from "../auth/authSlice";
import ProfileImageInput from "../../components/ProfileImageInput";
import { useUploadPicMutation } from "../uploads/UploadsSlice";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import DotLoader from "react-spinners/DotLoader";

export default function RegisterThree({
  handleInputChange,
  handleCheckboxChange,
  showRegisterThree,
}) {
  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [profileImageName, setProfileImageName] = useState();
  const [requesting, setRequesting] = useState(false);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const Navigate = useNavigate();

  const [uploadPic] = useUploadPicMutation();

  const newUser = useSelector(selectNewUser);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
    setProfileImageName(image.name);
    const objUrl = URL.createObjectURL(image);
    setImageUrl(objUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const copyOfUser = { ...newUser };
    // copyOfUser.profileImage = profileImage;
    // copyOfUser.profileImageName = profileImageName;
    copyOfUser.profileName = newUser.firstName + " & " + newUser.dogName;
    // const formData = new FormData();
    // const copyUserArr = Object.entries(copyOfUser);
    // copyUserArr.map((entry) => {
    //   formData.append(entry[0], entry[1] || "");
    // });

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", profileImage);
    cloudinaryFormData.append("upload_preset", "bark_mate_standard_pics");

    // const cloudinaryFormDataFull = new FormData();
    // cloudinaryFormDataFull.append("file", profileImage);
    // cloudinaryFormDataFull.append("upload_preset", "bark_mate_standard_pics");
    setRequesting(true);

    // const cloudinaryResult = await uploadPic(cloudinaryFormData);
    const cloudinaryResult = await axios.post(
      "https://api.cloudinary.com/v1_1/dgrtldcsp/image/upload",
      cloudinaryFormData
    );
    // const cloudinaryResultFull = await uploadPic(cloudinaryFormDataFull);
    copyOfUser.profileImageUrl = cloudinaryResult.data.secure_url;
    // copyOfUser.imageUrlFull = cloudinaryResultFull.data.secure_url;
    const response = await registerUser(copyOfUser);
    setRequesting(false);
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
      <section className="form-main">
        <form
          encType="multipart/form-data"
          className="form"
          onSubmit={handleSubmit}
        >
          <Link to="/" className=" link link-register">
            <Logo logoClass="logo-nav" iconClass="icon-payment" />
          </Link>
          <FormSteps showRegisterThree={showRegisterThree} />
          <h1 className="form-header">Finish profile</h1>

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
      </section>
    </Wrapper>
  );
}
