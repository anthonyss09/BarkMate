import Wrapper from "../../assets/wrappers/CreatePostW";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
import { useCreatePostMutation } from "./PostsSlice";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ handleClick }) {
  const [postImage, setPostImage] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [postImageName, setPostImageName] = useState("");
  const [postText, setPostText] = useState("");
  const [createPost] = useCreatePostMutation();

  const currentUser = useSelector(selectCurrentUser);

  const Navigate = useNavigate();

  let user = useSelector(selectCurrentUser);
  const urlPre = "../../data/uploads/";

  const handleImageChange = (e) => {
    const image = e.target.files[0] || "";
    setPostImage(image);
    setPostImageName(image.name);
    if (image) {
      const objUrl = URL.createObjectURL(image);
      setImageUrl(objUrl);
    }
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setPostText(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageName", postImageName);
    formData.append("postImage", postImage);
    formData.append("text", postText);
    formData.append("userId", currentUser._id);
    formData.append("coordinates", currentUser.location.coordinates);
    formData.append("userImageName", user.profileImageName);
    formData.append("userName", user.firstName);
    formData.append("userDogName", user.dogName);
    try {
      const post = await createPost(formData);
      setPostImage("");
      setImageUrl();
      setPostImageName("");
      setPostText("");
      handleClick();
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {" "}
      <form
        encType="multipart/form-data"
        className="create-post-main"
        onSubmit={handleSubmit}
      >
        <div className="icon-container">
          <AiOutlineCloseCircle
            size={25}
            className="icon-close"
            onClick={handleClick}
          />
        </div>

        <div className="create-post-heading">
          <Link>
            {" "}
            <img
              src={urlPre + user.profileImageName}
              className="create-post-pic"
            />
          </Link>
          <span className="create-post-name">
            {currentUser.firstName} & {currentUser.dogName}
          </span>
        </div>
        <div className="create-post-form-row">
          <textarea
            id="createPost"
            name="Create post"
            rows="10"
            placeholder="What would you like to share?"
            className="create-post-textarea"
            onChange={handleTextChange}
          />
        </div>
        <div className="create-post-form-row post-image-row">
          {postImage && (
            <div className="create-post-image-container">
              <img src={imageUrl} className="post-image" />
            </div>
          )}
          <label
            htmlFor="image"
            className="create-post-label create-post-label-image"
          >
            <p>Upload a pic</p> <FiCamera size={20} />
            <input
              id="image"
              type="file"
              className="create-post-input "
              onChange={handleImageChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-create-post">
          Submit post
        </button>
      </form>
    </Wrapper>
  );
}
