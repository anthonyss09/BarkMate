import Wrapper from "../../assets/wrappers/CommentW";

export default function Comment({
  commentText,
  commentAuthorName,
  commentAuthorImageUrl,
}) {
  return (
    <Wrapper>
      <div className={"comment-row"}>
        <img
          src={commentAuthorImageUrl}
          className="comment-image"
          alt="the comment"
        />
        <div className="comment-body">
          <div className="comment-author"> {commentAuthorName}</div>
          <div className="comment-text"> {commentText}</div>
        </div>
      </div>
    </Wrapper>
  );
}
