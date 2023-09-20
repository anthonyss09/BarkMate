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
  const userId = user._id;
  const coordinates = user.location.coordinates;
  const {
    data: currentUser,
    isLoading: loadingUser,
    isSuccess,
  } = useRefreshUserCredentialsQuery(userId);
  const {
    data: postsData,
    isLoading: loadingPosts,
    refetch,
  } = useGetPostsQuery(coordinates);

  let posts;
  if (!loadingPosts) {
    posts = Object.values(postsData).length > 0 ? Object.values(postsData) : [];
  }

  const [showCreatePost, setShowCreatePost] = useState(false);

  let updatedUser;

  const [scrolled, setScrolled] = useState("");
  const [creatingComment, setCreatingComment] = useState(false);

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

  let content;
  if (!loadingPosts && isSuccess) {
    content = postsData ? (
      posts.map((post, index) => {
        const imageTag = post.imageObject
          ? JSON.parse(post.imageObject).imageTag
          : "";
        return (
          <Post
            authorId={post.authorId}
            authorName={post.authorName}
            authorDogName={post.authorDogName}
            text={post.text}
            authorImageUrl={post.authorImageUrl}
            postImageName={post.postImageName}
            key={index}
            comments={post.comments}
            likes={post.likes}
            postId={post._id}
            currentUserId={userId}
            currentUserFirstName={user.firstName}
            currentUserDogName={user.dogName}
            currentUserCoords={coordinates}
            currentUserProfileName={user.profileName}
            currentUserProfileImageUrl={user.profileImageUrl}
            createdAt={post.createdAt}
            postImageUrl={post.postImageUrl}
            setCreatingComment={setCreatingComment}
            creatingComment={creatingComment}
          />
        );
      })
    ) : (
      <div className="no-posts">
        No posts to display at the moment,
        <br /> check back again soon!
      </div>
    );
  }

  return (
    <Wrapper>
      {creatingComment && (
        <BeatLoader size={35} color="lightBlue" className="beat-loader" />
      )}
      <section className={`dash-main ${showCreatePost ? "no-scroll" : ""}`}>
        <div className="dash-center">
          <div className={`create-post-container ${scrolled}`}>
            <div className="create-post" onClick={handleClick}>
              <IoIosAdd size={35} className="icon-add" />
            </div>
          </div>
          <div
            className={`posts-container ${
              loadingPosts ? "background-white" : ""
            }`}
          >
            {loadingPosts ? (
              <BeatLoader color="lightBlue" size={35} className="beat-loader" />
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
