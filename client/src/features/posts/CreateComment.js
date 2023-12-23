import Wrapper from "../../assets/wrappers/CreateCommentW";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";

export default function CreateComment({
  isFocused,
  handleShowPostComment,
  showPostComment,
  handleCommentChange,
  handlePostComment,
  handleFocus,
  handleBlur,
  comment,
  dateOfPost,
  text,
  authorImageUrl,
  authorProfileName,
  postImageUrl,
  requesting,
}) {
  return (
    <Wrapper>
      <div className={`post-comment-row ${showPostComment ? "" : ""}`}>
        <section className="post-comment-input-row">
          <span className="comment-icon-close">
            {" "}
            <AiOutlineClose size={25} onClick={handleShowPostComment} />
          </span>
          <textarea
            id="createComment"
            name="Create comment"
            rows="1"
            placeholder="Type your comment..."
            className={`post-textarea ${
              isFocused ? "post-textarea-focused" : ""
            }`}
            onChange={handleCommentChange}
            autoFocus={true}
            value={comment}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button className={`btn btn-send `} disabled={requesting}>
            {" "}
            <AiOutlineSend
              size={30}
              className="icon-send"
              id="postComment"
              onClick={handlePostComment}
            />
          </button>
        </section>

        <section className="post-comment-preview">
          {" "}
          <span className="post-comment-heading">
            {" "}
            <img
              src={authorImageUrl}
              className="post-comment-heading-pic"
              alt="post comment"
            />
            <span className="post-comment-name">
              <p>{authorProfileName}</p>
              <p className=" post-comment-date">{dateOfPost}</p>
            </span>
          </span>
          <div className="post-comment-body">
            <p className="post-comment-text">{text}</p>
            <img
              src={postImageUrl}
              alt="the post"
              className={`post-comment-body-pic ${isFocused ? "focused" : ""}`}
            />
          </div>
        </section>
      </div>
    </Wrapper>
  );
}
