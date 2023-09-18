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
import BeatLoader from "react-spinners/BeatLoader";

export default function QuickChat({
  recipientId,
  handleMessageClick,
  recipientProfileName,
  showQuickChat,
  recipientImageUrl,
}) {
  const {
    _id: currentUserId,
    profileName,
    profileImageUrl,
  } = useSelector(selectCurrentUser);
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
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
    setMessage("");
    setSendingMessage(true);
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
    setSendingMessage(false);
    handleMessageClick();
  };

  return (
    <Wrapper>
      <div
        className={`quick-chat-main ${!showQuickChat ? "hidden" : ""} ${
          isFocused ? "focused-height" : ""
        }`}
      >
        {sendingMessage && (
          <BeatLoader color="lightBlue" size={35} className="beat-loader" />
        )}
        <div
          className={`quick-chat-center ${!showQuickChat ? "no-display" : ""}`}
        >
          <AiOutlineCloseCircle
            size={35}
            className=" icon-close"
            onClick={handleMessageClick}
          />
          <div className="quick-chat-header">
            <img src={recipientImageUrl} className="quick-chat-image" />
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
              disabled={sendingMessage}
            >
              <AiOutlineSend size={35} />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
