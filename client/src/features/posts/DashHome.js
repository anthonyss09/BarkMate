import Wrapper from "../../assets/wrappers/DashHomeW";
import { FiCamera } from "react-icons/fi";
import Post from "./Post";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useRefreshUserCredentialsQuery } from "../api/apiSlice";
import { useEffect } from "react";
import { useGetProfileByIdQuery } from "../users/UsersSlice";
import CreatePost from "./CreatePost";
import { useState } from "react";
import { useGetPostsQuery } from "./PostsSlice";

export default function DashHome() {
  let user = useSelector(selectCurrentUser);
  const urlPre = "../../data/uploads/";
  const userId = user._id;
  const coordinates = user.location.coordinates;
  // const { data, isLoading } = useRefreshUserCredentialsQuery(userId);
  const { data: currentUser, isLoading: loadingUser } =
    useGetProfileByIdQuery(userId);
  const { data: postsData, isLoading: loadingPosts } =
    useGetPostsQuery(coordinates);

  const [showCreatePost, setShowCreatePost] = useState(false);

  let updatedUser;

  useEffect(() => {
    updatedUser = currentUser ? currentUser.user : user;
    localStorage.setItem("user", JSON.stringify(updatedUser));
    user = updatedUser;
    console.log(updatedUser.friends.length);
  }, [currentUser]);

  const handleClick = () => {
    setShowCreatePost(!showCreatePost);
  };

  const posts = postsData ? (
    postsData.posts.map((post, index) => {
      return (
        <Post
          userName={post.userName}
          userDogName={post.userDogName}
          text={post.text}
          userImageName={post.userImageName}
          imageName={post.imageName}
          key={index}
        />
      );
    })
  ) : (
    <div>no content</div>
  );

  return (
    <Wrapper>
      <section className="dash-main">
        {showCreatePost ? (
          <CreatePost handleClick={handleClick} />
        ) : (
          <div className="dash-center">
            <div className="create-post-container">
              <div className="create-post">
                <Link to="/userProfile">
                  {" "}
                  <img
                    src={urlPre + user.profileImageName}
                    className="dash-profile-pic"
                  />
                </Link>

                <p className="post-p" onClick={handleClick}>
                  Share something with the mates!
                </p>
                <span className="icon-picture" onClick={handleClick}>
                  <FiCamera size={25} />
                </span>
              </div>
            </div>
            <div className="posts-container">
              {loadingPosts ? <div>loading posts</div> : posts}
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
}
