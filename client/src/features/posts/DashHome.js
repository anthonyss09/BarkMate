import Wrapper from "../../assets/wrappers/DashHomeW";
import Post from "./Post";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  useRefreshUserCredentialsQuery,
} from "../auth/authSlice";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import CreatePost from "./CreatePost";
import { useGetPostsQuery } from "../posts/PostsSlice";
import DotLoader from "react-spinners/DotLoader";
import { IoIosAdd } from "react-icons/io";

export default function DashHome() {
  const [pageNumber, setPageNumber] = useState(1);
  let user = useSelector(selectCurrentUser);
  const updatedUserRef = useRef(null);
  const userRef = useRef(user);
  const userId = userRef.current._id;
  const coordinates = user.location.coordinates;
  const { data: currentUser, isSuccess } =
    useRefreshUserCredentialsQuery(userId);

  const { data: postsData, isLoading: loadingPosts } = useGetPostsQuery({
    friends: JSON.stringify(user.friends),
    coordinates,
    pageNumber,
  });

  let posts;
  if (!loadingPosts) {
    posts = Object.values(postsData).length > 0 ? Object.values(postsData) : [];
  }

  const [showCreatePost, setShowCreatePost] = useState(false);

  // let updatedUser;

  const [scrolled, setScrolled] = useState("");
  const [requesting, setRequesting] = useState(false);

  const incrementPageNumber = () => {
    setPageNumber(pageNumber + 1);
  };

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
    updatedUserRef.current = currentUser ? currentUser.user : user;
    localStorage.setItem("user", JSON.stringify(updatedUserRef.current));
    userRef.current = updatedUserRef.current;
  }, [currentUser, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setShowCreatePost(!showCreatePost);
  };

  let content;
  if (!loadingPosts && isSuccess) {
    content = postsData ? (
      posts.map((post, index) => {
        return (
          <Post
            authorId={post.authorId}
            authorName={post.authorName}
            authorDogName={post.authorDogName}
            authorProfileName={post.authorProfileName}
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
            requesting={requesting}
            setRequesting={setRequesting}
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
      {requesting && (
        <div className="alert-container">
          {" "}
          <DotLoader size={85} color="lightBlue" className="beat-loader" />
        </div>
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
              <div className="alert-container">
                {" "}
                <DotLoader
                  color="lightBlue"
                  size={85}
                  className="beat-loader"
                />
              </div>
            ) : (
              content
            )}
          </div>
        </div>
        {!loadingPosts && (
          <button className="btn" onClick={incrementPageNumber}>
            load more posts
          </button>
        )}
      </section>
      <CreatePost
        handleClick={handleClick}
        showCreatePost={showCreatePost}
        requesting={requesting}
        setRequesting={setRequesting}
      />
    </Wrapper>
  );
}
