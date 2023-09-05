import Wrapper from "../../assets/wrappers/ProfilePreviewW";
import jennyMax from "../../assets/images/jennie&maxSmall.jpg";
import { FaUserFriends } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import QuickChat from "../chats/QuickChat";
import { useState, useRef } from "react";
import { useEffect } from "react";
import {
  useRequestFriendMutation,
  useCreateNotificationMutation,
} from "../api/apiSlice";
import mongoose from "mongoose";

export default function ProfilePreview({
  firstName,
  dogName,
  aboutUs,
  profileImageName,
  timeAvailable,
  timeNeeded,
  id,
  profileName,
  currentUser,
}) {
  const [showQuickChat, setShowQuickChat] = useState(false);

  const urlPre = "../../data/uploads/";

  const [createNotification] = useCreateNotificationMutation();
  const [requestFriend] = useRequestFriendMutation();
  const friendRequestId = new mongoose.Types.ObjectId();
  const notificationId = new mongoose.Types.ObjectId();

  const handleFriendRequest = () => {
    requestFriend({
      _id: friendRequestId,
      requester: currentUser._id,
      participants: [
        {
          participantId: currentUser._id,
          participantProfileName: currentUser.profileName,
          participantProfileImageName: currentUser.profileImageName,
        },
        {
          participantId: id,
          participantProfileName: profileName,
          participantProfileImageName: profileImageName,
        },
      ],
      // requesterProfileName: currentUser.user.profileName,
      // requesterProfileImageName: currentUser.user.profileImageName,
      recipient: id,
      // recipientProfileName: user.profileName,
      // recipientProfileImageName: user.profileImageName,
      requesterStatus: "pending",
      recipientStatus: "requested",
    });
    createNotification({
      _id: notificationId,
      friendId: id,
      recipient: id,
      sender: currentUser._id,
      senderProfileImageName: currentUser.profileImageName,
      senderProfileName: currentUser.profileName,
      notificationPath: "friendRequests",
      notificationType: "friendRequest",
      is_read: false,
      is_viewed: false,
    });
  };

  const handleMessageClick = () => {
    setShowQuickChat(!showQuickChat);
  };

  return (
    <Wrapper>
      <aside className="profile-preview-main">
        <div className="profile-preview-center">
          {" "}
          <div className="profile-preview-header">
            {" "}
            <h1 className="profile-preview-name">{profileName}</h1>
          </div>
          <div className="profile-preview-body">
            <Link to={`/${id}`} className="profile-pic-container">
              {" "}
              <img
                className="profile-preview-pic"
                src={urlPre + profileImageName}
                alt="jennie & max"
              />
            </Link>{" "}
            <div className="profile-preview-options">
              <div className="option-container">
                {" "}
                <div
                  className="add-friend option"
                  onClick={handleFriendRequest}
                >
                  + <FaUserFriends size={45} />
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
              <div className="option-container">
                {" "}
                <div
                  className="message option"
                  onClick={() => {
                    handleMessageClick();
                  }}
                >
                  <FiMail size={45} className="message-friend" />
                </div>
              </div>
            </div>
            <div className="profile-preview-about">
              <h1 className="about-heading">
                About Us
                <div className="location-container">
                  <MdLocationOn size={15} />
                  <span className="location">Williamsburg</span>
                </div>
              </h1>

              <p className="profile-preview-p">
                {/* "Hey we're Jennie & Max. I work nights & Max loves evening
                walks. I'm available to go on walks during the day. We're
                woofing forward to meeting you!" */}
                {aboutUs}
              </p>
            </div>
          </div>
        </div>
      </aside>
      <QuickChat
        recipientId={id}
        recipientImageName={profileImageName}
        handleMessageClick={handleMessageClick}
        recipientProfileName={profileName}
        showQuickChat={showQuickChat}
      />
    </Wrapper>
  );
}
