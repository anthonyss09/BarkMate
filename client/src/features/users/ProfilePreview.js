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
  timeNeeded,
  timeAvailable,
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

  const availability = timeAvailable.map((time, index) => {
    return (
      <p key={index} className="time-slot time-slot-available">
        {time}
      </p>
    );
  });
  const needed = timeNeeded.map((time, index) => {
    return (
      <p key={index} className="time-slot time-slot-needed">
        {time}
      </p>
    );
  });

  return (
    <Wrapper>
      <div className="profile-preview-center">
        {" "}
        <span className="profile-preview-header">
          {" "}
          <h1 className="profile-preview-name">
            {profileName}{" "}
            {sample && profileName !== "Bark Mate" && (
              <span className="sample-user-name"> Sample user</span>
            )}
          </h1>
        </span>
        <div className="profile-preview-body">
          <Link to={`/${id}`} className="profile-pic-container">
            {" "}
            <img
              className="profile-preview-pic"
              src={profileImageUrl}
              alt="jennie & max"
            />
          </Link>{" "}
          <section className="profile-preview-options">
            <button className="option-container btn-add-friend">
              {" "}
              <span className="add-friend option" onClick={handleFriendRequest}>
                {" "}
                <p>+</p> <FaUserFriends size={45} />
              </span>
            </button>

            <div className="time-slots-container">
              {" "}
              <div className="time-slot-column">
                <h1 className="time-slot-title">I'm available</h1>
                {availability}
              </div>
              <div className="time-slot-column">
                <h1 className="time-slot-title">I need</h1>
                {needed}
              </div>
            </div>

            <button className="option-container btn-add-friend">
              {" "}
              <div
                className="message option"
                onClick={() => {
                  handleMessageClick();
                }}
              >
                <FiMail size={45} className="message-friend" />
              </div>
            </button>
          </section>
          <section className="profile-preview-about">
            <span className="about-heading">
              <h1>About Us</h1>
              <div className="location-container">
                <MdLocationOn size={15} />
                <p className="location">
                  {sample && profileName !== "Bark Mate" ? "Your city" : city}
                </p>
              </div>
            </span>

            <p className="profile-preview-p">{aboutUs}</p>
          </section>
        </div>
      </div>

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
