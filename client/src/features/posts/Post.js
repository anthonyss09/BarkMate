import Wrapper from "../../assets/wrappers/PostW";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import { useEditPostMutation } from "./PostsSlice";
import { useCreateNotificationMutation } from "../api/apiSlice";
import Comment from "./Comment";
import { useRef, useEffect } from "react";
import mongoose from "mongoose";

export default function Post({
  authorId,
  authorName,
  authorDogName,
  text,
  postImageName,
  authorImageName,
  comments,
  likes,
  postId,
  currentUserId,
  currentUserImageName,
  currentUserFirstName,
  currentUserDogName,
  currentUserCoords,
  currentUserProfileName,
}) {
  const [showPostComment, setShowPostComment] = useState(false);
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

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
    setTimeout(() => {
      ref.current.focus();
    }, 300);
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
            <img src={urlPre + authorImageName} className="post-heading-pic" />
            <span className="post-name">
              {authorName} & {authorDogName}
            </span>
          </div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            {postImageName && (
              <img src={urlPre + postImageName} className="post-body-pic" />
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

          <div
            className={`post-comment-row ${showPostComment ? "" : "hidden"}`}
          >
            <textarea
              ref={ref}
              id="createComment"
              name="Create comment"
              rows="3"
              placeholder="Comment on post..."
              className="post-textarea"
              onChange={handleCommentChange}
              autoFocus={true}
              value={comment}
            />
            <button className="btn btn-send">
              {" "}
              <AiOutlineSend
                size={30}
                className="icon-send"
                id="postComment"
                onClick={handlePostComment}
              />
            </button>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
