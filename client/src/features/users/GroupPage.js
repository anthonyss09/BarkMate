import Wrapper from "../../assets/wrappers/ProfilePageW";
import HomeNav from "../../app/HomeNav";
import { FaUserFriends } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "../../app/Footer";
import { HiCamera } from "react-icons/hi";
import goodBoys from "../../assets/images/goodBoysSmall.jpg";
import { MdLocationOn } from "react-icons/md";

export default function ProfilePage() {
  return (
    <Wrapper>
      <HomeNav />

      <main className="profile-page-main">
        <div className="profile-page-center">
          <div className="back-button"> </div>
          <div className="profile-page-header">
            <div className="profile-preview-name-container">
              <h1 className="profile-preview-name">The Local GoodBoys </h1>
              <div className="location-container">
                <MdLocationOn size={15} />
                <span className="location">Williamsburg</span>
              </div>
            </div>
            <span className="members">23 members</span>
          </div>
          <img src={goodBoys} className="profile-page-image" alt="the group" />

          <div className="profile-page-options">
            <div className="add-friend option">
              + <FaUserFriends size={30} />
            </div>

            <div className="message option">
              <FiMail size={30} className="message-friend" />
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
            </div>

            <div className="profile-page-about">
              {" "}
              <h3 className="section-header">About Us</h3>
              <p className="profile-page-p">
                The Local GoodBoys is a group of dog lovers who are here to
                expand our community, pool resources and create friendships.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
}
