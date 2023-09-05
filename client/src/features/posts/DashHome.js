import Wrapper from "../../assets/wrappers/DashHomeW";
import Post from "./Post";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  useRefreshUserCredentialsQuery,
} from "../auth/authSlice";
import { useEffect, useState, useLayoutEffect } from "react";
import CreatePost from "./CreatePost";
// import { useGetPostsQuery } from "./PostsSlice";
import { useGetPostsQuery } from "../api/apiSlice";
import BeatLoader from "react-spinners/BeatLoader";
import { IoIosAdd } from "react-icons/io";

export default function DashHome() {
  let user = useSelector(selectCurrentUser);
  const urlPre = "../../data/uploads/";
  const userId = user._id;
  const coordinates = user.location.coordinates;
  const { data: currentUser, isLoading: loadingUser } =
    useRefreshUserCredentialsQuery(userId);
  const {
    data: postsData,
    isLoading: loadingPosts,
    refetch,
  } = useGetPostsQuery(coordinates);

  let posts;
  if (!loadingPosts) {
    posts = Object.values(postsData);
  }

  const [showCreatePost, setShowCreatePost] = useState(false);

  let updatedUser;

  const [scrolled, setScrolled] = useState("");

  const onScroll = () => {
    if (window.scrollY > 300) {
      setScrolled("scrolled");
    } else {
      setScrolled("");
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    updatedUser = currentUser ? currentUser.user : user;
    localStorage.setItem("user", JSON.stringify(updatedUser));
    user = updatedUser;
    window.scrollTo(0, 0);
  }, [currentUser]);

  const handleClick = () => {
    setShowCreatePost(!showCreatePost);
  };

  const content = postsData ? (
    posts.map((post, index) => {
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
          currentUserProfileName={user.profileName}
          createdAt={post.createdAt}
        />
      );
    })
  ) : (
    <div>no content</div>
  );

  return (
    <Wrapper>
      <section className={`dash-main ${showCreatePost ? "no-scroll" : ""}`}>
        <div className="dash-center">
          <div className={`create-post-container ${scrolled}`}>
            <div className="create-post" onClick={handleClick}>
              <IoIosAdd size={35} className="icon-add" />
            </div>
          </div>
          <div className="posts-container">
            {loadingPosts ? (
              <BeatLoader color="silver" size={25} className="beat-loader" />
            ) : (
              content
            )}
          </div>
        </div>
      </section>
      <CreatePost handleClick={handleClick} showCreatePost={showCreatePost} />
    </Wrapper>
  );
}
