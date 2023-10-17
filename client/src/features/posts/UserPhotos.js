import Wrapper from "../../assets/wrappers/UserPhotosW";
import { useGetUserPostsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function UserPhotos() {
  const { _id: userId } = useSelector(selectCurrentUser);

  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const { data, isLoading, isSuccess, isError } = useGetUserPostsQuery(userId);

  const handleClick = () => {
    setShowCarousel(!showCarousel);
  };

  let content;

  if (isSuccess && data.userPosts.length !== 0) {
    content = data.userPosts
      .filter((post) => post.postImageUrl)
      .map((post, index) => (
        <div key={index} className="user-photo-container">
          <img
            onClick={() => {
              handleClick();
              setSelectedItem(index);
            }}
            src={post.postImageUrl}
            className={`user-photo ${
              showCarousel ? "user-photo-carousel" : ""
            }`}
          />
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
      {!showCarousel && (
        <Link to="/userProfile" className="link">
          {" "}
          <RiArrowGoBackFill size={30} className="user-photos-icon-back" />
        </Link>
      )}

      <section
        className={`user-photos-main ${
          showCarousel ? "user-photos-main-carousel" : ""
        }`}
      >
        {showCarousel && (
          <AiOutlineClose
            size={35}
            className="icon-close"
            onClick={handleClick}
          />
        )}
        {showCarousel && (
          <div className="carousel-conatiner">
            <Carousel
              className="carousel"
              showIndicators={false}
              dynamicHeight={true}
              showThumbs={false}
              selectedItem={selectedItem}
              infiniteLoop={true}
              showStatus={false}
            >
              {content}
            </Carousel>
          </div>
        )}
        {!showCarousel && content}
      </section>
    </Wrapper>
  );
}
