import Wrapper from "../../assets/wrappers/QucikChatW";
import { AiOutlineCloseCircle, AiOutlineSend } from "react-icons/ai";
import { useCreateChatMutation } from "../api/apiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import {
  useGetChatsQuery,
  useCreateNotificationMutation,
} from "../api/apiSlice";
import mongoose from "mongoose";

export default function QuickChat({
  recipientImageName,
  recipientId,
  handleMessageClick,
  recipientProfileName,
  showQuickChat,
}) {
  const {
    _id: currentUserId,
    profileImageName,
    profileName,
  } = useSelector(selectCurrentUser);
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [createChat] = useCreateChatMutation();
  const [createNotification] = useCreateNotificationMutation();
  const id = new mongoose.Types.ObjectId();

  const { data, error, isLoading } = useGetChatsQuery(currentUserId);
  const urlPre = "../../data/uploads/";

  const handleMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSendMessage = async () => {
    handleMessageClick();
    setMessage("");
    const newChat = await createChat({
      participants: [
        {
          participantId: currentUserId,
          participantProfileName: profileName,
          participantImageName: profileImageName,
        },
        {
          participantId: recipientId,
          participantProfileName: recipientProfileName,
          participantImageName: recipientImageName,
        },
      ],
      message: {
        sender: currentUserId,
        recipient: recipientId,
        content: message,
      },
    });
    createNotification({
      _id: id,
      chatId: newChat._id,
      recipient: recipientId,
      sender: currentUserId,
      senderProfileImageName: profileImageName,
      senderProfileName: profileName,
      notificationPath: "chats",
      notificationType: "message",
      is_read: false,
      is_viewed: false,
    });
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
              src={urlPre + recipientImageName}
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
            >
              <AiOutlineSend size={35} />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
