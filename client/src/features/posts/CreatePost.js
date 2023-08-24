import Wrapper from "../../assets/wrappers/CreatePostW";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
// import { useCreatePostMutation } from "./PostsSlice";
import { useCreatePostMutation } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ handleClick, showCreatePost }) {
  const [postImage, setPostImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [postImageName, setPostImageName] = useState("");
  const [postText, setPostText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [createPost] = useCreatePostMutation();

  const currentUser = useSelector(selectCurrentUser);

  const Navigate = useNavigate();

  let user = useSelector(selectCurrentUser);
  const urlPre = "../../data/uploads/";

  const handleImageChange = (e) => {
    console.log(e.target.files);

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

  const handleFocus = (e) => {
    // console.log(e.target.files);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postImageName", postImageName);
    formData.append("postImage", postImage);
    formData.append("text", postText);
    formData.append("authorId", currentUser._id);
    formData.append("coordinates", currentUser.location.coordinates);
    formData.append("authorImageName", user.profileImageName);
    formData.append("authorName", user.firstName);
    formData.append("authorDogName", user.dogName);
    try {
      await createPost(formData);
      setPostImage("");
      setImageUrl("");
      setPostImageName("");
      setPostText("");
      handleClick();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {" "}
      <form
        encType="multipart/form-data"
        className={`create-post-main ${isFocused ? "no-scroll" : ""} ${
          !showCreatePost ? "collapsed" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <div
          className="icon-container"
          onClick={() => {
            handleClick();
            setIsFocused(false);
          }}
        >
          <AiOutlineCloseCircle size={35} className="icon-close" />
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
            rows="5"
            placeholder="What would you like to share?"
            className="create-post-textarea"
            onChange={handleTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={postText}
          />
        </div>
        <div
          className={`create-post-form-row post-image-row ${
            isFocused ? "focused" : ""
          }`}
        >
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
          <div>
            <button type="submit" className="btn btn-create-post">
              Submit post
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
