import Wrapper from "../../assets/wrappers/CreatePostW";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, selectCurrentUser } from "../auth/authSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { useState, memo } from "react";
import { useCreatePostMutation } from "../posts/PostsSlice";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default memo(function CreatePost({
  handleClick,
  showCreatePost,
  requesting,
  setRequesting,
}) {
  const [postImage, setPostImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [postImageName, setPostImageName] = useState("");
  const [postText, setPostText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [createPost] = useCreatePostMutation();

  const currentUser = useSelector(selectCurrentUser);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  let user = useSelector(selectCurrentUser);

  const handleImageChange = (e) => {
    console.log(e.target.files);

    const image = e.target.files[0] || "";
    setPostImage(image);
    setPostImageName(image.name);
    console.log(postImageName);

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
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      text: postText,
      authorId: currentUser._id,
      coordinates: currentUser.location.coordinates,
      authorImageUrl: user.profileImageUrl,
      authorName: user.firstName,
      authorDogName: user.dogName,
      postImageUrl: "",
    };

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", postImage);
    cloudinaryFormData.append("upload_preset", "bark_mate_standard_pics");

    if (postImage) {
      setRequesting(true);

      const cloudinaryResult = await axios.post(
        "https://api.cloudinary.com/v1_1/dgrtldcsp/image/upload",
        cloudinaryFormData
      );

      post.postImageUrl = cloudinaryResult.data.secure_url;
    }

    const newPost = await createPost(post);
    console.log(newPost);
    if (newPost.error) {
      dispatch(
        displayAlert({
          alertMessage: newPost.error.data.message,
          alertType: "danger",
        })
      );
      console.log("the error is", newPost.error.data.message);
    } else if (newPost.data) {
      dispatch(
        displayAlert({
          alertMessage: newPost.data.message,
          alertType: "success",
        })
      );
      console.log("the data is", newPost.data.message);
    }

    setRequesting(false);
    setPostImage("");
    setImageUrl("");
    setPostImageName("");
    setPostText("");
    handleClick();
    setTimeout(() => {
      if (
        newPost.error &&
        newPost.error.data.message === "Invalid credentials."
      ) {
        dispatch(logoutUser());
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        Navigate("/");
        console.log("caught the credentials");
      }
      dispatch(clearAlert());
    }, 2000);
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
              src={user.profileImageUrl}
              className="create-post-pic"
              alt="user profile"
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
              <img src={imageUrl} className="post-image" alt="the post" />
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
            <button
              type="submit"
              className="btn btn-create-post"
              disabled={requesting}
            >
              Submit post
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
});
