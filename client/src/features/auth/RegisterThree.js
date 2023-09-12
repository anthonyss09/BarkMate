import Wrapper from "../../assets/wrappers/FormW";
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

export default function RegisterThree({
  handleInputChange,
  handleCheckboxChange,
  showRegisterThree,
}) {
  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [profileImageName, setProfileImageName] = useState();
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

    try {
      const cloudinaryResult = await uploadPic(cloudinaryFormData);
      // const cloudinaryResultFull = await uploadPic(cloudinaryFormDataFull);
      copyOfUser.profileImageUrl = cloudinaryResult.data.secure_url;
      // copyOfUser.imageUrlFull = cloudinaryResultFull.data.secure_url;
      const response = await registerUser(copyOfUser);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      Navigate("/dashboard/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <section className="form-main">
        <form
          encType="multipart/form-data"
          className="form"
          onSubmit={handleSubmit}
        >
          <Link to="/" className=" link">
            <Logo />
          </Link>
          <FormSteps showRegisterThree={showRegisterThree} />
          <h1 className="form-header">Finish profile</h1>
          {/* <div className="form-row">
            {profileImage && (
              <div className="profile-image-container">
                <img src={imageUrl} className="profile-image" />
              </div>
            )}
            <label htmlFor="image" className="form-label form-label-image">
              <p>Add profile image </p> <FiCamera size={20} />
              <input
                id="image"
                type="file"
                className="form-input form-input-image"
                onChange={handleImageChange}
              />
            </label>
          </div> */}

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
