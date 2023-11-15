import Post from "./Post";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "./PostsSlice";
import DotLoader from "react-spinners/DotLoader";
import Alert from "../alerts/Alert.js";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";

export default function SinglePostPage() {
  const { postId } = useParams();

  const user = useSelector(selectCurrentUser);

  const { data, isSuccess, isLoading, isError } = useGetPostQuery(postId);

  let content;
  let post;
  if (isLoading) {
    content = (
      <div className="alert-container">
        {" "}
        <DotLoader size={85} color="lightBlue" className="beat-loader" />
      </div>
    );
  } else if (isSuccess) {
    post = data.content[0];
    console.log(post);
    content = (
      <Post
        authorId={post.authorId}
        authorName={post.authorName}
        authorDogName={post.authorDogName}
        text={post.text}
        authorImageUrl={post.authorImageUrl}
        likes={post.likes}
        postId={post._id}
        createdAt={post.createdAt}
        currentUserId={user._id}
        currentUserCoords={user.location.coordinates}
        currentUserProfileName={user.profileName}
        postImageUrl={post.postImageUrl}
        currentUserProfileImageUrl={user.profileImageUrl}
      />
    );
  } else if (isError) {
    content = (
      <div className="alert-container">
        <Alert
          alertType="danger"
          alertMessage="Sorry there was an error loading this content."
        />
      </div>
    );
  }

  return (
    <section>
      <Link to="/dashboard/home" className="link">
        {" "}
        <RiArrowGoBackFill size={30} className="post-single-icon-back" />
      </Link>
      {content}
    </section>
  );
}
