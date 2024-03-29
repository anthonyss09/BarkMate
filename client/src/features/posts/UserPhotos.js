import Wrapper from "../../assets/wrappers/UserPhotosW";
import { useGetUserPostsQuery } from "../posts/PostsSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

export default function UserPhotos() {
  const { userId } = useParams();

  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const { data, isSuccess } = useGetUserPostsQuery(userId);

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
            alt="the post"
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
    content = (
      <div className="alert-container">
        {" "}
        <DotLoader size={85} color="lightBlue" className="beat-loader" />
      </div>
    );
  }

  return (
    <Wrapper>
      {!showCarousel && (
        <Link to={`/${userId}`} className="link">
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
