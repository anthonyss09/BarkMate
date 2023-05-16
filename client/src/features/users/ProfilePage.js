import Wrapper from "../../assets/wrappers/ProfilePageW";
import HomeNav from "../../app/HomeNav";
import { TbArrowBackUp } from "react-icons/tb";
import jennieMax from "../../assets/images/jennie&maxSmall.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdMonochromePhotos } from "react-icons/md";
import Footer from "../../app/Footer";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { HiCamera } from "react-icons/hi";
import goodBoys from "../../assets/images/goodBoysSmall.jpg";
import { MdLocationOn } from "react-icons/md";

export default function ProfilePage() {
  return (
    <Wrapper>
      <HomeNav />

      <main className="profile-page-main">
        <div className="profile-page-center">
          <div className="profile-page-header">
            <div className="back-button">
              {" "}
              <span className="icon-back-arrow">
                <TbArrowBackUp size={25} />
              </span>
              {/* <span>Home</span> */}
            </div>
            <div className="stars-container">
              {" "}
              {/* <p className="v-p">Verification</p> */}
              <AiFillStar className="icon-star" />
              <AiFillStar className="icon-star" />
              <AiOutlineStar className="icon-star" />
            </div>
            <h3 className="profile-page-name">Jennie & Max</h3>

            <img src={jennieMax} className="profile-page-image" />

            <div className="profile-page-options">
              <div className="add-friend option">
                + <FaUserFriends size={20} />
              </div>

              <div className="message option">
                <FiMail size={20} className="message-friend" />
              </div>
            </div>
          </div>
          <div className="profile-page-body">
            <div className="profile-page-views">
              {" "}
              <div className="view-photos">
                <p>Photos</p>
                <div className="photo-option">
                  <HiCamera size={20} className="icon-camera" />
                </div>
              </div>
              <div className="location-container">
                <MdLocationOn size={15} />
                <span className="location-text">Williamsburg</span>
              </div>
            </div>
            <div className="time-slots-container">
              <div className="time-slot-column">
                <p className="time-slot-p">Available</p>
                <div className="time-slot time-slot-available">nights</div>
              </div>
              <div className="time-slot-column">
                <p className="time-slot-p">Need</p>
                <div className="time-slot time-slot-needed">days</div>
              </div>
            </div>

            <div className="profile-page-about">
              {" "}
              <h3 className="about-header">About Us</h3>
              <p className="profile-page-p">
                "Hey we're Jennie & Max. I work nights & Max loves evening
                walks. I'm available to go on walks during the day. We're
                woofing forward to meeting you!"
              </p>
            </div>
            <div className="profile-page-dog-info">
              <h3 className="about-header">Pup's info</h3>
              <div className="dog-details-container">
                <div className="dog-detail dog-detail-weight">50lbs</div>
                <div className="dog-detail dog-detail-energy">High energy</div>
                <div className="dog-detail dog-detail-breed">Lab mix</div>
              </div>
            </div>

            <div className="profile-page-groups">
              <h3 className="about-header">Our Groups</h3>
              <div className="groups-container">
                <div className="group-single">
                  {" "}
                  <img className="group-image" src={goodBoys} />
                  <p className="group-name">The Local GoodBoys</p>
                </div>
              </div>
            </div>
            <div className="profile-page-social-links">
              <h3 className="about-header">Social links</h3>
              these are links to our social media
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
}
