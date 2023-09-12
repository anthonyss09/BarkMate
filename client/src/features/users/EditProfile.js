import Wrapper from "../../assets/wrappers/FormW";
import HomeNav from "../../app/HomeNav";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useRef } from "react";
import AdressInput from "../../components/AdressInput";
import ProfileImageInput from "../../components/ProfileImageInput";
import { useState } from "react";
import FormCheckbox from "../auth/FormCheckbox";
import Footer from "../../app/Footer";

export default function EditProfile() {
  const user = useSelector(selectCurrentUser);
  const inputRef = useRef();

  // const urlPre = "../../data/uploads/";

  const [profileImage, setProfileImage] = useState();
  const [imageUrl, setImageUrl] = useState();

  const handlePlaceChanged = async () => {};

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
    //   setProfileImageName(image.name);
    const objUrl = URL.createObjectURL(image);
    setImageUrl(objUrl);
  };

  const handleInputChange = (e) => {};

  const handleCheckboxChange = (e) => {};

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

          <AdressInput
            inputRef={inputRef}
            handlePlaceChanged={handlePlaceChanged}
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
        </div>
        <div className="edit-profile-buttons">
          <button className="btn btn-edit btn-discard">Discard</button>
          <button className="btn btn-edit btn-save">Save</button>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
}
