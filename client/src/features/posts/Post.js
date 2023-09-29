import Wrapper from "../../assets/wrappers/PostW";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useState, memo } from "react";
import { useEditPostMutation } from "../api/apiSlice";
import { useCreateNotificationMutation } from "../api/apiSlice";
import Comment from "./Comment";
import mongoose from "mongoose";
import moment from "moment";
import CreateComment from "./CreateComment";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import { logoutUser } from "../auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

export default memo(function Post({
  authorId,
  authorName,
  authorDogName,
  text,
  authorImageUrl,
  comments,
  likes,
  postId,
  createdAt,
  currentUserId,
  currentUserFirstName,
  currentUserDogName,
  currentUserCoords,
  currentUserProfileName,
  postImageUrl,
  currentUserProfileImageUrl,
  requesting,
  setRequesting,
}) {
  const [showPostComment, setShowPostComment] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const dateOfPost = moment(createdAt.toString()).startOf("minute").fromNow();
  const dateCheck = moment(createdAt.toString()).format();
  const dateShort =
    dateOfPost.split(" ")[0] + dateOfPost.split(" ")[1].charAt(0);
  const id = new mongoose.Types.ObjectId();

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [editPost] = useEditPostMutation();
  const [createNotification] = useCreateNotificationMutation();

  const handleCommentChange = (e) => {
    const val = e.target.value;
    setComment(val);
  };

  const handleShowPostComment = () => {
    setShowPostComment(!showPostComment);
    setShowAllComments(false);
  };

  const handlePostComment = async () => {
    let commentsCopy = comments.slice();

    commentsCopy.push({
      userId: currentUserId,
      userProfileImageUrl: currentUserProfileImageUrl,
      firstName: currentUserFirstName,
      dogName: currentUserDogName,
      text: comment,
    });

    setRequesting(true);
    const newPost = await editPost({
      postId,
      update: { comments: commentsCopy },
      currentUserCoords,
    });
    setRequesting(false);

    if (newPost.error) {
      dispatch(
        displayAlert({
          alertMessage: newPost.error.data.message,
          alertType: "danger",
        })
      );
      console.log(newPost);
    } else if (newPost.data) {
      dispatch(
        displayAlert({
          alertMessage: newPost.data.message,
          alertType: "success",
        })
      );
      createNotification({
        _id: id,
        postId,
        recipient: authorId,
        sender: currentUserId,
        senderProfileName: currentUserProfileName,
        senderPorfileImageUrl: currentUserProfileImageUrl,
        notificationPath: "posts",
        notificationType: "comment",
        is_read: false,
        is_viewed: false,
      });
      console.log("the data is", newPost.data.message);
    }
    setShowPostComment(!showPostComment);
    setComment("");

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
    }, 1000);
  };

  const userLikes = likes.map((like) => like.userId);

  const handleLikePost = async () => {
    const copyOfLikes = likes.slice();

    let index;
    if (userLikes.includes(currentUserId)) {
      index = userLikes.indexOf(currentUserId);
      copyOfLikes.splice(index, 1);
      editPost({ postId, update: { likes: copyOfLikes }, currentUserCoords });
    } else {
      copyOfLikes.push({ userId: currentUserId });
      editPost({ postId, update: { likes: copyOfLikes }, currentUserCoords });
      createNotification({
        _id: id,
        postId,
        recipient: authorId,
        sender: currentUserId,
        senderProfileName: currentUserProfileName,
        senderProfileImageUrl: currentUserProfileImageUrl,
        notificationPath: "posts",
        notificationType: "like",
        is_read: false,
        is_viewed: false,
      });
    }
  };

  const handleShowAllComments = () => {
    setShowAllComments(!showAllComments);
    setShowPostComment(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let commentCount = 0;
  const content = comments.map((comment, index) => {
    commentCount++;
    if (commentCount > 1 && !showAllComments) {
      return;
    }

    return (
      <Comment
        key={index}
        commentUserProfileImageUrl={comment.userProfileImageUrl}
        commentText={comment.text}
        commentFirstName={comment.firstName}
        commentDogName={comment.dogName}
      />
    );
  });

  return (
    <Wrapper>
      <aside className="post-main">
        <div className="post-center">
          <div className="post-heading">
            <Link to={"/" + authorId}>
              {" "}
              <img src={authorImageUrl} className="post-heading-pic" />
            </Link>

            <span className="post-name">
              {authorName} & {authorDogName} <br />
              <span className="post-date">{dateOfPost}</span>
            </span>
          </div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            {postImageUrl && (
              <img src={postImageUrl} className="post-body-pic" />
            )}
          </div>
          <div className="post-info"></div>
          <div className="post-options">
            <div className="icon icon-heart-container">
              {userLikes.includes(currentUserId) ? (
                <AiFillHeart
                  size={25}
                  onClick={handleLikePost}
                  className="icon-heart-fill"
                />
              ) : (
                <AiOutlineHeart size={25} onClick={handleLikePost} />
              )}

              {likes.length}
            </div>
            <div className="icon icon-comment">
              <FaRegCommentDots size={25} onClick={handleShowPostComment} />
            </div>
          </div>
          <div className="comments-container"> {content}</div>
          {!showAllComments && comments.length > 1 && (
            <div className="show-comments" onClick={handleShowAllComments}>
              show all comments
            </div>
          )}
          {showAllComments && (
            <div className="show-comments" onClick={handleShowAllComments}>
              show less comments
            </div>
          )}
          {showPostComment && (
            <CreateComment
              authorName={authorName}
              authorDogName={authorDogName}
              isFocused={isFocused}
              handleShowPostComment={handleShowPostComment}
              showPostComment={showPostComment}
              handleCommentChange={handleCommentChange}
              handlePostComment={handlePostComment}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              comment={comment}
              dateOfPost={dateOfPost}
              text={text}
              authorImageUrl={authorImageUrl}
              postImageUrl={postImageUrl}
              requesting={requesting}
              setRequesting={setRequesting}
            />
          )}
        </div>
      </aside>
    </Wrapper>
  );
});
