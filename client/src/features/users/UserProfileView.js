import Wrapper from "../../assets/wrappers/ProfilePageW";
import HomeNav from "../../app/HomeNav";
import { FaUserFriends } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "../../app/Footer";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { HiCamera } from "react-icons/hi";
import goodBoys from "../../assets/images/goodBoysSmall.jpg";
import { MdLocationOn } from "react-icons/md";
import { selectCurrentUser } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRefreshUserCredentialsQuery } from "../auth/authSlice";

export default function UserProfileView() {
  const {
    firstName,
    dogName,
    breed,
    weight,
    aboutUs,
    energyLevel,
    timeNeeded,
    timeAvailable,
    profileImageUrl,
    _id,
  } = useSelector(selectCurrentUser);

  // const urlPre = "../../data/uploads/";
  const { data } = useRefreshUserCredentialsQuery(_id);

  const availabity = timeAvailable.map((time, index) => {
    return (
      <div key={index} className="time-slot time-slot-available">
        {time}
      </div>
    );
  });

  const needed = timeNeeded.map((time, index) => {
    return (
      <div key={index} className="time-slot time-slot-needed">
        {time}
      </div>
    );
  });

  return (
    <Wrapper>
      <HomeNav />
      <main className="profile-page-main">
        <div className="profile-page-center">
          <div className="back-button"> </div>
          <div className="profile-page-header">
            <div className="profile-preview-name-container">
              <div className="profile-preview-verification">
                {/* <div className="stars-container">
                  {" "}
                  <AiFillStar className="icon-star" size={10} />
                  <AiFillStar className="icon-star" size={10} />
                  <AiOutlineStar className="icon-star" size={10} />
                </div> */}
              </div>
              <h1 className="profile-preview-name">
                {firstName} & {dogName}
              </h1>
              <div className="location-container">
                <MdLocationOn size={15} />
                <span className="location">Williamsburg</span>
              </div>
            </div>
            <Link to="/userProfile/editProfile" className="link">
              {" "}
              <HiOutlinePencilSquare size={35} />
            </Link>
          </div>
          <img src={profileImageUrl} className="profile-page-image" />

          {/* <div className="profile-page-options">
            <div className="add-friend option">
              + <FaUserFriends size={30} />
            </div>

            <div className="message option">
              <FiMail size={30} className="message-friend" />
            </div>
          </div> */}
          <div className="profile-page-body">
            <div className="profile-page-views">
              {" "}
              <div className="view-photos">
                <p>Photos</p>
                <div className="photo-option">
                  <HiCamera size={20} className="icon-camera" />
                </div>
              </div>
            </div>
            <div className="time-slots-container">
              <div className="time-slot-column">
                <p className="time-slot-title">Available</p>
                {availabity}
              </div>
              <div className="time-slot-column">
                <p className="time-slot-title">Need</p>
                {needed}
              </div>
            </div>

            <div className="profile-page-about">
              {" "}
              <h3 className="section-header">About Us</h3>
              <p className="profile-page-p">{aboutUs}</p>
            </div>
            <div className="profile-page-dog-info">
              <h3 className="section-header">Pup's info</h3>
              <div className="dog-details-container">
                <div className="dog-detail dog-detail-weight">{weight}</div>
                <div className="dog-detail dog-detail-energy">
                  {energyLevel}
                </div>
                <div className="dog-detail dog-detail-breed">{breed}</div>
              </div>
            </div>

            <div className="profile-page-groups">
              <h3 className="section-header">Our Groups</h3>
              <div className="groups-container">
                <div className="group-single">
                  {" "}
                  <img className="group-image" src={goodBoys} />
                  <p className="group-name">The Local GoodBoys</p>
                </div>
              </div>
            </div>
            <div className="profile-page-social-links">
              <h3 className="section-header">Social links</h3>
              these are links to our social media
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
}
