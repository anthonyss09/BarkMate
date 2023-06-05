import Wrapper from "../../assets/wrappers/ProfilePreviewW";
import jennyMax from "../../assets/images/jennie&maxSmall.jpg";
import { FaUserFriends } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProfilePreview() {
  return (
    <Wrapper>
      <aside className="profile-preview-main">
        <div className="profile-preview-center">
          {" "}
          <div className="profile-preview-header">
            {" "}
            <div className="profile-preview-name-container">
              <div className="profile-preview-verification">
                <div className="stars-container">
                  {" "}
                  <AiFillStar className="icon-star" size={10} />
                  <AiFillStar className="icon-star" size={10} />
                  <AiOutlineStar className="icon-star" size={10} />
                </div>
              </div>
              <h1 className="profile-preview-name">Jennie & Max </h1>
              <div className="location-container">
                <MdLocationOn size={15} />
                <span className="location">Williamsburg</span>
              </div>
            </div>
            <div className="time-slots-container">
              {" "}
              <div className="time-slot-column">
                <h1 className="time-slot-title">I'm available</h1>
                <div className="time-slot time-slot-available">mornings</div>
              </div>
              <div className="time-slot-column">
                <h1 className="time-slot-title">I need</h1>
                <div className="time-slot time-slot-needed">nights</div>
              </div>
            </div>
          </div>
          <div className="profile-preview-body">
            <Link to="/profileid">
              {" "}
              <img
                className="profile-preview-pic"
                src={jennyMax}
                alt="jennie & max"
              />
            </Link>{" "}
            <div className="profile-preview-options">
              <div className="option-container">
                {" "}
                <div className="add-friend option">
                  + <FaUserFriends size={30} />
                </div>
              </div>
              <div className="option-container">
                {" "}
                <div className="message option">
                  <FiMail size={30} className="message-friend" />
                </div>
              </div>
            </div>
            <div className="profile-preview-about">
              <h1 className="about-heading">About Us</h1>
              <p className="profile-preview-p">
                "Hey we're Jennie & Max. I work nights & Max loves evening
                walks. I'm available to go on walks during the day. We're
                woofing forward to meeting you!"
              </p>
            </div>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
