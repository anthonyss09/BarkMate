import Wrapper from "../../assets/wrappers/ProfilePreviewW";
import { FaUserFriends } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";

import { Link } from "react-router-dom";
import QuickChat from "../chats/QuickChat";
import { useState } from "react";
import { useRequestFriendMutation } from "../friends/FriendsSlice";
import { useCreateNotificationMutation } from "../notifications/NotificationsSlice";
import mongoose from "mongoose";
import { useDispatch } from "react-redux";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import { logoutUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function ProfilePreview({
  aboutUs,
  id,
  profileName,
  currentUser,
  profileImageUrl,
  requesting,
  setRequesting,
  city,
  sample,
}) {
  const [showQuickChat, setShowQuickChat] = useState(false);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [createNotification] = useCreateNotificationMutation();
  const [requestFriend] = useRequestFriendMutation();
  const friendRequestId = new mongoose.Types.ObjectId();
  const notificationId = new mongoose.Types.ObjectId();

  const handleFriendRequest = async () => {
    setRequesting(true);
    const newFriend = await requestFriend({
      _id: friendRequestId,
      requester: currentUser._id,
      participants: [
        {
          participantId: currentUser._id,
          participantProfileName: currentUser.profileName,
          participantProfileImageUrl: currentUser.profileImageUrl,
        },
        {
          participantId: id,
          participantProfileName: profileName,
          participantProfileImageUrl: profileImageUrl,
        },
      ],
      participantIds: [currentUser._id, id],
      recipient: id,
      requesterStatus: "pending",
      recipientStatus: "requested",
    });
    setRequesting(false);

    if (newFriend.error) {
      dispatch(
        displayAlert({
          alertMessage: newFriend.error.data.message,
          alertType: "danger",
        })
      );
      console.log(newFriend.error.data.message);
    } else if (newFriend.data) {
      dispatch(
        displayAlert({
          alertMessage: newFriend.data.message,
          alertType: "success",
        })
      );
      createNotification({
        _id: notificationId,
        friendId: id,
        recipient: id,
        sender: currentUser._id,
        senderProfileName: currentUser.profileName,
        senderProfileImageUrl: currentUser.profileImageUrl,
        notificationPath: "friendRequests",
        notificationType: "friendRequest",
        is_read: false,
        is_viewed: false,
      });
    }

    setTimeout(() => {
      if (
        newFriend.error &&
        newFriend.error.data.message === "Invalid credentials."
      ) {
        dispatch(logoutUser());
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        Navigate("/");
        console.log("caught the credentials");
      }
      dispatch(clearAlert());
    }, 2000);
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
                src={profileImageUrl}
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
                  <span className="location">
                    {sample ? "Your city" : city}
                  </span>
                </div>
              </h1>

              <p className="profile-preview-p">{aboutUs}</p>
            </div>
          </div>
        </div>
      </aside>
      <QuickChat
        recipientId={id}
        handleMessageClick={handleMessageClick}
        recipientProfileName={profileName}
        showQuickChat={showQuickChat}
        recipientImageUrl={profileImageUrl}
        requesting={requesting}
        setRequesting={setRequesting}
      />
    </Wrapper>
  );
}
