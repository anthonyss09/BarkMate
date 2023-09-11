import Wrapper from "../../assets/wrappers/PostW";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useState, memo } from "react";
// import { useEditPostMutation } from "./PostsSlice";
import { useEditPostMutation } from "../api/apiSlice";
import { useCreateNotificationMutation } from "../api/apiSlice";
import Comment from "./Comment";
import { useRef, useEffect } from "react";
import mongoose from "mongoose";
import moment from "moment";
// import { AiOutlineCloseCircle } from "react-icons/ai";
import CreateComment from "./CreateComment";
import { Link } from "react-router-dom";

export default memo(function Post({
  authorId,
  authorName,
  authorDogName,
  text,
  postImageName,
  authorImageName,
  comments,
  likes,
  postId,
  createdAt,
  currentUserId,
  currentUserImageName,
  currentUserFirstName,
  currentUserDogName,
  currentUserCoords,
  currentUserProfileName,
  imageTag,
  imageUrl,
}) {
  const [showPostComment, setShowPostComment] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const dateOfPost = moment(createdAt.toString()).startOf("minute").fromNow();
  const dateCheck = moment(createdAt.toString()).format();
  const dateShort =
    dateOfPost.split(" ")[0] + dateOfPost.split(" ")[1].charAt(0);
  const urlPre = "../../data/uploads/";
  const id = new mongoose.Types.ObjectId();

  const ref = useRef();

  const [editPost] = useEditPostMutation();
  const [createNotification] = useCreateNotificationMutation();

  const handleCommentChange = (e) => {
    const val = e.target.value;
    setComment(val);
  };

  const handleShowPostComment = () => {
    setShowPostComment(!showPostComment);
    setShowAllComments(false);
    // setTimeout(() => {
    //   ref.current.focus();
    // }, 300);
  };

  const handlePostComment = async () => {
    let commentsCopy = comments.slice();

    commentsCopy.push({
      userId: currentUserId,
      userImageName: currentUserImageName,
      firstName: currentUserFirstName,
      dogName: currentUserDogName,
      text: comment,
    });
    editPost({
      postId,
      update: { comments: commentsCopy },
      currentUserCoords,
    });
    createNotification({
      _id: id,
      postId,
      recipient: authorId,
      sender: currentUserId,
      senderProfileImageName: currentUserImageName,
      senderProfileName: currentUserProfileName,
      notificationPath: "posts",
      notificationType: "comment",
      is_read: false,
      is_viewed: false,
    });
    setShowPostComment(!showPostComment);
    setComment("");
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
        senderProfileImageName: currentUserImageName,
        senderProfileName: currentUserProfileName,
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
        commentUserImageName={urlPre + comment.userImageName}
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
              <img
                src={urlPre + authorImageName}
                className="post-heading-pic"
              />
            </Link>

            <span className="post-name">
              {authorName} & {authorDogName} <br />
              <span className="post-date">{dateOfPost}</span>
            </span>
          </div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            {postImageName && <img src={imageUrl} className="post-body-pic" />}
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
              postImageName={postImageName}
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
              authorImageName={authorImageName}
              dateOfPost={dateOfPost}
              text={text}
            />
          )}
        </div>
      </aside>
    </Wrapper>
  );
});
