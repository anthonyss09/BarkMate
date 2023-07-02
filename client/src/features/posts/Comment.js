import Wrapper from "../../assets/wrappers/CommentW";

export default function Comment({
  commentText,
  commentUserImageName,
  commentFirstName,
  commentDogName,
  border,
}) {
  return (
    <Wrapper>
      <div className={"comment-row"}>
        <img src={commentUserImageName} className="comment-image" />
        <div className="comment-body">
          <div className="div" className="comment-author">
            {" "}
            {commentFirstName} & {commentDogName}
          </div>
          <div className="comment-text"> {commentText}</div>
        </div>
      </div>
    </Wrapper>
  );
}
