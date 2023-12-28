import Wrapper from "../../assets/wrappers/PostW";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useState, memo } from "react";
import {
  useEditPostMutation,
  useCreateCommentMutation,
  useGetCommentsQuery,
} from "../posts/PostsSlice";
import { useCreateNotificationMutation } from "../notifications/NotificationsSlice";
import Comment from "./Comment";
import mongoose from "mongoose";
import moment from "moment";
import CreateComment from "./CreateComment";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import { logoutUser } from "../auth/authSlice";
import { useDispatch } from "react-redux";

export default memo(function Post({
  authorId,
  authorName,
  authorDogName,
  authorProfileName,
  text,
  authorImageUrl,
  likes,
  postId,
  createdAt,
  currentUserId,
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
  const id = new mongoose.Types.ObjectId();

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [editPost] = useEditPostMutation();
  const [createNotification] = useCreateNotificationMutation();
  const [createComment] = useCreateCommentMutation();
  const { data: comments, isSuccess } = useGetCommentsQuery(postId);

  const handleCommentChange = (e) => {
    const val = e.target.value;
    setComment(val);
  };

  const handleShowPostComment = () => {
    setShowPostComment(!showPostComment);
    setShowAllComments(false);
  };

  const handlePostComment = async () => {
    if (currentUserProfileName === "Demo") {
      dispatch(
        displayAlert({
          alertType: "danger",
          alertMessage: "Create a profile to comment.",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      setShowPostComment(!showPostComment);
      setComment("");
      return;
    }
    setRequesting(true);

    const newComment = await createComment({
      postId,
      authorId: currentUserId,
      authorImageUrl: currentUserProfileImageUrl,
      authorName: currentUserProfileName,
      text: comment,
    });
    setRequesting(false);

    if (newComment.error) {
      dispatch(
        displayAlert({
          alertMessage: newComment.error.data.message,
          alertType: "danger",
        })
      );
    } else if (newComment.data) {
      dispatch(
        displayAlert({
          alertMessage: newComment.data.message,
          alertType: "success",
        })
      );
      createNotification({
        _id: id,
        postId,
        recipient: authorId,
        sender: currentUserId,
        senderProfileName: currentUserProfileName,
        senderProfileImageUrl: currentUserProfileImageUrl,
        notificationPath: "posts",
        notificationType: "comment",
        is_read: false,
        is_viewed: false,
      });
      console.log("the data is", newComment.data.message);
    }
    setShowPostComment(!showPostComment);
    setComment("");

    setTimeout(() => {
      if (
        newComment.error &&
        newComment.error.data.message === "Invalid credentials."
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
  let content = undefined;
  if (isSuccess) {
    content = comments.content.map((comment, index) => {
      commentCount++;
      if (commentCount > 1 && !showAllComments) {
        return null;
      }

      return (
        <Comment
          key={index}
          commentUserProfileImageUrl={comment.userProfileImageUrl}
          commentText={comment.text}
          commentFirstName={comment.firstName}
          commentDogName={comment.dogName}
          commentAuthorName={comment.authorName}
          commentAuthorImageUrl={comment.authorImageUrl}
        />
      );
    });
  }

  return (
    <Wrapper>
      <section className="post-heading">
        <Link to={"/" + authorId}>
          {" "}
          <img src={authorImageUrl} className="post-heading-pic" alt="author" />
        </Link>

        <span className="post-name">
          <p> {authorProfileName}</p>
          <p className="post-date">{dateOfPost}</p>
        </span>
      </section>

      <p className="post-text">{text}</p>

      <figure className="post-image">
        {postImageUrl && (
          <img src={postImageUrl} className="post-body-pic" alt="the post" />
        )}
      </figure>

      <section className="post-options">
        <span className="icon icon-heart-container">
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
        </span>
        <span className="icon icon-comment">
          <FaRegCommentDots size={25} onClick={handleShowPostComment} />
        </span>
      </section>

      {isSuccess && (
        <section className="comments-container"> {content}</section>
      )}
      {!showAllComments && isSuccess && comments.content.length > 1 && (
        <p className="show-comments" onClick={handleShowAllComments}>
          show all comments
        </p>
      )}
      {showAllComments && (
        <p className="show-comments" onClick={handleShowAllComments}>
          show less comments
        </p>
      )}
      {showPostComment && (
        <CreateComment
          authorName={authorName}
          authorDogName={authorDogName}
          authorProfileName={authorProfileName}
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
    </Wrapper>
  );
});
