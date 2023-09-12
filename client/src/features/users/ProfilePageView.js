import Wrapper from "../../assets/wrappers/ProfilePageW";
import HomeNav from "../../app/HomeNav";
import { FaUserFriends } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "../../app/Footer";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { HiCamera } from "react-icons/hi";
import goodBoys from "../../assets/images/goodBoysSmall.jpg";
import { MdLocationOn } from "react-icons/md";
import { useGetProfileByIdQuery } from "./UsersSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useRefreshUserCredentialsQuery } from "../auth/authSlice";
import mongoose from "mongoose";
import {
  useCreateNotificationMutation,
  useRequestFriendMutation,
} from "../api/apiSlice";
import QuickChat from "../chats/QuickChat";
import { useState } from "react";

export default function ProfilePageView() {
  const { profileId } = useParams();
  const {
    data: userData,
    error,
    isLoading,
  } = useGetProfileByIdQuery(profileId);
  // const urlPre = "../../data/uploads/";
  const currentUser = useSelector(selectCurrentUser);
  const notificationId = new mongoose.Types.ObjectId();
  // const { data: currentUser } = useRefreshUserCredentialsQuery(localUser._id);
  const friendRequestId = new mongoose.Types.ObjectId();
  const [requestFriend] = useRequestFriendMutation();
  const [createNotification] = useCreateNotificationMutation();

  const [showQuickChat, setShowQuickChat] = useState(false);

  const handleMessageClick = () => {
    setShowQuickChat(!showQuickChat);
  };

  if (isLoading) {
    return <div>profile loading</div>;
  }

  let availability;
  let needed;
  if (!isLoading) {
    availability = userData.user.timeAvailable.map((time, index) => {
      return (
        <div key={index} className="time-slot time-slot-available">
          {time}
        </div>
      );
    });

    needed = userData.user.timeNeeded.map((time, index) => {
      return (
        <div key={index} className="time-slot time-slot-needed">
          {time}
        </div>
      );
    });
  }

  const handleFriendRequest = async () => {
    console.log(currentUser);
    try {
      const response = await requestFriend({
        _id: friendRequestId,
        requester: currentUser._id,
        participants: [
          {
            participantId: currentUser._id,
            participantProfileName: currentUser.profileName,
            participantProfileImageName: currentUser.profileImageName,
            participantProfileImageUrl: currentUser.profileImageUrl,
          },
          {
            participantId: userData.user._id,
            participantProfileName: userData.user.profileName,
            participantProfileImageName: userData.user.profileImageName,
            participantProfileImageUrl: userData.user.profileImageUrl,
          },
        ],
        // requesterProfileName: currentUser.user.profileName,
        // requesterProfileImageName: currentUser.user.profileImageName,
        recipient: userData.user._id,
        // recipientProfileName: user.profileName,
        // recipientProfileImageName: user.profileImageName,
        requesterStatus: "pending",
        recipientStatus: "requested",
      });
      createNotification({
        _id: notificationId,
        friendId: profileId,
        recipient: profileId,
        sender: currentUser._id,
        senderProfileImageName: currentUser.profileImageName,
        senderProfileName: currentUser.profileName,
        senderProfileImageUrl: currentUser.profileImageUrl,
        notificationPath: "friendRequests",
        notificationType: "friendRequest",
        is_read: false,
        is_viewed: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <HomeNav />
      <main className="profile-page-main">
        <div className="profile-page-center">
          <div className="back-button"> </div>
          <div className="profile-page-header">
            <div className="profile-preview-name-container">
              {/* <div className="profile-preview-verification">
                <div className="stars-container">
                  {" "}
                  <AiFillStar className="icon-star" size={10} />
                  <AiFillStar className="icon-star" size={10} />
                  <AiOutlineStar className="icon-star" size={10} />
                </div>
              </div> */}
              <h1 className="profile-preview-name">
                {userData.user.firstName} & {userData.user.dogName}
              </h1>
              <div className="location-container">
                <MdLocationOn size={15} />
                <span className="location">Williamsburg</span>
              </div>
            </div>
          </div>
          <img
            src={userData.user.profileImageUrl}
            className="profile-page-image"
          />

          <div className="profile-page-options">
            <div className="add-friend option" onClick={handleFriendRequest}>
              + <FaUserFriends size={45} />
            </div>

            <div className="message option" onClick={handleMessageClick}>
              <FiMail size={45} className="message-friend" />
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
            <div className="time-slots-container">
              <div className="time-slot-column">
                <p className="time-slot-title">Available</p>
                {availability}
              </div>
              <div className="time-slot-column">
                <p className="time-slot-title">Need</p>
                {needed}
              </div>
            </div>

            <div className="profile-page-about">
              {" "}
              <h3 className="section-header">About Us</h3>
              <p className="profile-page-p">{userData.user.aboutUs}</p>
            </div>
            <div className="profile-page-dog-info">
              <h3 className="section-header">Pup's info</h3>
              <div className="dog-details-container">
                <div className="dog-detail dog-detail-weight">
                  {userData.user.weight}
                </div>
                <div className="dog-detail dog-detail-energy">
                  {userData.user.energyLevel}
                </div>
                <div className="dog-detail dog-detail-breed">
                  {userData.user.breed}
                </div>
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
      <QuickChat
        recipientId={profileId}
        recipientImageName={userData.user.profileImageName}
        recipientImageUrl={userData.user.profileImageUrl}
        handleMessageClick={handleMessageClick}
        recipientProfileName={userData.user.profileName}
        showQuickChat={showQuickChat}
      />
    </Wrapper>
  );
}
