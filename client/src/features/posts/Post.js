import Wrapper from "../../assets/wrappers/PostW";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import { useEditPostMutation } from "./PostsSlice";
import Comment from "./Comment";

export default function Post({
  userName,
  userDogName,
  text,
  imageName,
  userImageName,
  comments,
  likes,
  postId,
  currentUserId,
  currentUserImageName,
  currentUserFirstName,
  currentUserDogName,
  currentUserCoords,
}) {
  const [showPostComment, setShowPostComment] = useState(false);
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const urlPre = "../../data/uploads/";

  const [editPost] = useEditPostMutation();

  const handleCommentChange = (e) => {
    const val = e.target.value;
    setComment(val);
  };

  const handleShowPostComment = () => {
    setShowPostComment(!showPostComment);
    setShowAllComments(false);
  };

  const handlePostComment = () => {
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
    setShowPostComment(!showPostComment);
  };

  const userLikes = likes.map((like) => like.userId);

  const handleLikePost = () => {
    const copyOfLikes = likes.slice();

    let index;
    if (userLikes.includes(currentUserId)) {
      index = userLikes.indexOf(currentUserId);
      copyOfLikes.splice(index, 1);
      editPost({ postId, update: { likes: copyOfLikes }, currentUserCoords });
    } else {
      copyOfLikes.push({ userId: currentUserId });
      editPost({ postId, update: { likes: copyOfLikes }, currentUserCoords });
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
            <img src={urlPre + userImageName} className="post-heading-pic" />
            <span className="post-name">
              {userName} & {userDogName}
            </span>
          </div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            {imageName && (
              <img src={urlPre + imageName} className="post-body-pic" />
            )}
          </div>
          <div className="post-info">
            {/* <div className="post-likes">
              {" "}
              {likes.length}
              <div className="icon-heart-fill">
                <AiFillHeart size={20} />
              </div>
            </div> */}

            {/* <div className="post-comments-button">
              {comments.length} comment{comments.length > 1 && "s"}
            </div> */}
          </div>
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
            <div className="post-comment-row">
              <textarea
                id="createPost"
                name="Create post"
                rows="3"
                placeholder="Comment on post..."
                className="post-textarea"
                onChange={handleCommentChange}
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
          )}
        </div>
      </aside>
    </Wrapper>
  );
}
