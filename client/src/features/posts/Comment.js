import Wrapper from "../../assets/wrappers/CommentW";

export default function Comment({
  commentText,
  commentUserImageName,
  commentFirstName,
  commentDogName,
  border,
  commentUserProfileImageUrl,
  commentAuthorName,
  commentAuthorImageUrl,
}) {
  return (
    <Wrapper>
      <div className={"comment-row"}>
        <img src={commentAuthorImageUrl} className="comment-image" />
        <div className="comment-body">
          <div className="comment-author">
            {" "}
            {/* {commentFirstName} & {commentDogName} */}
            {commentAuthorName}
          </div>
          <div className="comment-text"> {commentText}</div>
        </div>
      </div>
    </Wrapper>
  );
}
