import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";

export default function CreateComment({
  postImageName,
  authorName,
  authorDogName,
  isFocused,
  handleShowPostComment,
  showPostComment,
  handleCommentChange,
  handlePostComment,
  handleFocus,
  handleBlur,
  comment,
  authorImageName,
  dateOfPost,
  text,
}) {
  const urlPre = "../../data/uploads/";

  return (
    <div className={`post-comment-row ${showPostComment ? "" : ""}`}>
      <div className="comment-icon-close">
        {" "}
        <AiOutlineCloseCircle size={35} onClick={handleShowPostComment} />
      </div>
      <div className="post-comment-preview">
        {" "}
        <div className="post-comment-heading">
          {" "}
          <img
            src={urlPre + authorImageName}
            className="post-comment-heading-pic"
          />
          <span className="post-comment-name">
            {authorName} & {authorDogName} <br />
            <span className=" post-comment-date">{dateOfPost}</span>
          </span>
        </div>
        <div className="post-comment-body">
          <div className="post-comment-text">{text}</div>
          <img
            src={urlPre + postImageName}
            className={`post-comment-body-pic ${isFocused ? "focused" : ""}`}
          />
        </div>
      </div>

      <textarea
        id="createComment"
        name="Create comment"
        rows="3"
        placeholder="Type your comment..."
        className={`post-textarea ${isFocused ? "post-textarea-focused" : ""}`}
        onChange={handleCommentChange}
        autoFocus={true}
        value={comment}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className={`btn btn-send `}>
        {" "}
        <AiOutlineSend
          size={30}
          className="icon-send"
          id="postComment"
          onClick={handlePostComment}
        />
      </button>
    </div>
  );
}
