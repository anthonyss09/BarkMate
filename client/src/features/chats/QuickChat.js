import Wrapper from "../../assets/wrappers/QucikChatW";
import { AiOutlineCloseCircle, AiOutlineSend } from "react-icons/ai";
import { useCreateChatMutation } from "../chats/ChatsSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useCreateNotificationMutation } from "../notifications/NotificationsSlice";
import mongoose from "mongoose";
import { useNavigate } from "react-router-dom";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import { logoutUser } from "../auth/authSlice";

export default function QuickChat({
  recipientId,
  handleMessageClick,
  recipientProfileName,
  showQuickChat,
  recipientImageUrl,
  setRequesting,
  requesting,
}) {
  const {
    _id: currentUserId,
    profileName,
    profileImageUrl,
  } = useSelector(selectCurrentUser);
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [createChat] = useCreateChatMutation();
  const [createNotification] = useCreateNotificationMutation();
  const id = new mongoose.Types.ObjectId();

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSendMessage = async () => {
    if (profileName === "Demo") {
      dispatch(
        displayAlert({
          alertType: "danger",
          alertMessage: "Create a profile to send messages.",
        })
      );
      setMessage("");
      handleMessageClick();
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      return;
    }
    setMessage("");
    setRequesting(true);
    const newChat = await createChat({
      participants: [
        {
          participantId: currentUserId,
          participantProfileName: profileName,
          participantProfileImageUrl: profileImageUrl,
        },
        {
          participantId: recipientId,
          participantProfileName: recipientProfileName,
          participantProfileImageUrl: recipientImageUrl,
        },
      ],
      message: {
        sender: currentUserId,
        recipient: recipientId,
        content: message,
      },
    });

    setRequesting(false);

    if (newChat.error) {
      dispatch(
        displayAlert({
          alertMessage: newChat.error.data.message,
          alertType: "danger",
        })
      );
      console.log(newChat.error.data.message);
    } else if (newChat.data) {
      dispatch(
        displayAlert({
          alertMessage: newChat.data.message,
          alertType: "success",
        })
      );

      createNotification({
        _id: id,
        chatId: newChat._id,
        recipient: recipientId,
        sender: currentUserId,
        senderProfileName: profileName,
        senderProfileImageUrl: profileImageUrl,
        notificationPath: "chats",
        notificationType: "message",
        is_read: false,
        is_viewed: false,
      });
      console.log(newChat.data.message);
    }

    handleMessageClick();

    setTimeout(() => {
      if (
        newChat.error &&
        newChat.error.data.message === "Invalid credentials."
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

  return (
    <Wrapper>
      <div
        className={`quick-chat-main ${!showQuickChat ? "hidden" : ""} ${
          isFocused ? "focused-height" : ""
        }`}
      >
        <div
          className={`quick-chat-center ${!showQuickChat ? "no-display" : ""}`}
        >
          <AiOutlineCloseCircle
            size={35}
            className=" icon-close"
            onClick={handleMessageClick}
          />
          <div className="quick-chat-header">
            <img
              src={recipientImageUrl}
              alt="the recipient"
              className="quick-chat-image"
            />
            <div className="header-text">
              {" "}
              <span className="quick-chat-recipient">
                {" " + recipientProfileName}
              </span>
            </div>
          </div>
          <div className="body">
            <textarea
              id="quick-chat-input"
              className="quick-chat-textarea"
              rows={8}
              placeholder="Type your message..."
              onChange={handleMessageChange}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              value={message}
            />
            <button
              type="button"
              className="btn quick-chat-btn"
              onClick={handleSendMessage}
              disabled={requesting}
            >
              <AiOutlineSend size={35} />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
