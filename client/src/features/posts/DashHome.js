import Wrapper from "../../assets/wrappers/DashHomeW";
import { FiCamera } from "react-icons/fi";
import Post from "./Post";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useRefreshUserCredentialsQuery } from "../api/apiSlice";
import { useEffect } from "react";
import CreatePost from "./CreatePost";
import { useState } from "react";
import { useGetPostsQuery } from "./PostsSlice";
import BeatLoader from "react-spinners/BeatLoader";

export default function DashHome() {
  let user = useSelector(selectCurrentUser);
  const urlPre = "../../data/uploads/";
  const userId = user._id;
  const coordinates = user.location.coordinates;
  const { data: currentUser, isLoading: loadingUser } =
    useRefreshUserCredentialsQuery(userId);
  const { data: postsData, isLoading: loadingPosts } =
    useGetPostsQuery(coordinates);

  const [showCreatePost, setShowCreatePost] = useState(false);

  let updatedUser;

  // const { sendMessage, sendJsonMessage } = useWebSocket(WS_URL, {
  //   onOpen: (e) => {
  //     console.log("web socket opened");
  //     sendJsonMessage({ type: "data", content: userId });
  //   },
  //   shouldReconnect: (closeEvent) => true,
  // });

  useEffect(() => {
    updatedUser = currentUser ? currentUser.user : user;
    localStorage.setItem("user", JSON.stringify(updatedUser));
    user = updatedUser;
    // console.log(updatedUser.friends.length);
    window.scrollTo(0, 0);
  }, [currentUser]);

  const handleClick = () => {
    setShowCreatePost(!showCreatePost);
  };

  const posts = postsData ? (
    postsData.posts.map((post, index) => {
      return (
        <Post
          authorId={post.authorId}
          authorName={post.authorName}
          authorDogName={post.authorDogName}
          text={post.text}
          authorImageName={post.authorImageName}
          postImageName={post.postImageName}
          key={index}
          comments={post.comments}
          likes={post.likes}
          postId={post._id}
          currentUserId={userId}
          currentUserImageName={user.profileImageName}
          currentUserFirstName={user.firstName}
          currentUserDogName={user.dogName}
          currentUserCoords={coordinates}
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
              {loadingPosts ? (
                <BeatLoader color="silver" size={25} className="beat-loader" />
              ) : (
                posts
              )}
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
}
