import Wrapper from "../../assets/wrappers/ProfilePageW";
import HomeNav from "../../app/HomeNav";
import Footer from "../../app/Footer";
import { HiCamera } from "react-icons/hi";
import goodBoys from "../../assets/images/goodBoysSmall.jpg";
import { MdLocationOn } from "react-icons/md";
import { selectCurrentUser } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGetProfileByIdQuery } from "./UsersSlice";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export default function UserProfileView() {
  const { _id: profileId } = useSelector(selectCurrentUser);

  const {
    data: userData,
    isLoading,
    isFetching,
  } = useGetProfileByIdQuery(profileId);

  if (isLoading) {
    return <div>is loading</div>;
  }

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
    profileName,
    _id,
  } = userData.user;

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
              <div className="profile-preview-verification"></div>
              <h1 className="profile-preview-name">{profileName}</h1>
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
          <img
            src={profileImageUrl}
            className="profile-page-image"
            alt="user profile"
          />
          <div className="profile-page-body">
            <div className="profile-page-views">
              {" "}
              <Link to={`/userProfile/userPhotos/${_id}`} className="link">
                <div className="view-photos">
                  {" "}
                  <p>Photos</p>
                  <div className="photo-option">
                    <HiCamera size={20} className="icon-camera" />
                  </div>
                </div>
              </Link>
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
                <div className="construction">
                  <div className="construction-center">
                    {" "}
                    {/* <h1 className="construction-header"></h1> */}
                    <p className="construction-p">
                      If you would like to see new features such as groups{" "}
                      <Link to="/contact" className="link construction-link">
                        Contact us
                      </Link>{" "}
                      with your thoughts.
                    </p>
                  </div>
                </div>
                <div className="group-single">
                  {" "}
                  <img className="group-image" src={goodBoys} alt="the group" />
                  <p className="group-name">The Local GoodBoys</p>
                </div>
              </div>
            </div>
            <div className="profile-page-social-links">
              <div className="construction">
                <div className="construction-center">
                  {" "}
                  {/* <h1 className="construction-header"></h1> */}
                  <p className="construction-p">
                    If you would like to see new features such as links to
                    social media
                    <br />{" "}
                    <Link to="/contact" className="link construction-link">
                      Contact us
                    </Link>{" "}
                    with your thoughts.
                  </p>
                </div>
              </div>
              <h3 className="section-header">Social links</h3>
              <div className="social-links-container">
                <div className="social-link-single icon-facebook">
                  {" "}
                  <FaFacebookSquare size={45} />
                </div>
                <div className="social-link-single icon-instagram">
                  {" "}
                  <FaInstagram size={45} />
                </div>
                <div className="social-link-single icon-twitter">
                  {" "}
                  <FaTwitter size={45} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
}
