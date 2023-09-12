import { FiCamera } from "react-icons/fi";

export default function ProfileImageInput({
  profileImage,
  imageUrl,
  handleImageChange,
}) {
  return (
    <div className="form-row">
      {profileImage && (
        <div className="profile-image-container">
          <img src={imageUrl} className="profile-image profile-input-image" />
        </div>
      )}
      <label htmlFor="image" className="form-label form-label-image">
        <p>Choose profile image </p> <FiCamera size={20} />
        <input
          id="image"
          type="file"
          className="form-input form-input-image"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}
