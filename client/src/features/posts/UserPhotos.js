import Wrapper from "../../assets/wrappers/UserPhotosW";
import { useGetUserPostsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";

export default function UserPhotos() {
  const { _id: userId } = useSelector(selectCurrentUser);

  const { data, isLoading, isSuccess, isError } = useGetUserPostsQuery(userId);

  console.log(data);

  let content;

  if (isSuccess && data.userPosts.length !== 0) {
    content = data.userPosts
      .filter((post) => post.postImageUrl)
      .map((post, index) => (
        <div key={index} className="user-photo-container">
          <img src={post.postImageUrl} className="user-photo" />
          <div className="overlay">{post.text}</div>
        </div>
      ));
  } else if (isSuccess && data.userPosts.length === 0) {
    content = <div> no posts</div>;
  } else {
    content = <div>beat loader</div>;
  }

  return (
    <Wrapper>
      <section className="user-photos-main">{content}</section>
    </Wrapper>
  );
}
