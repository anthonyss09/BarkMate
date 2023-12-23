import Wrapper from "../../assets/wrappers/CommentW";

export default function Comment({
  commentText,
  commentAuthorName,
  commentAuthorImageUrl,
}) {
  return (
    <Wrapper>
      <img
        src={commentAuthorImageUrl}
        className="comment-image"
        alt="the comment"
      />
      <section className="comment-body">
        <p className="comment-author"> {commentAuthorName}</p>
        <p className="comment-text"> {commentText}</p>
      </section>
    </Wrapper>
  );
}
