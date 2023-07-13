import Wrapper from "../../assets/wrappers/QucikChatW";
import { AiOutlineCloseCircle, AiOutlineSend } from "react-icons/ai";
import { useCreateChatMutation } from "../api/apiSlice";
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useGetChatsQuery } from "../api/apiSlice";

export default function QuickChat({
  recipientImageName,
  recipientId,
  handleMessageClick,
  recipientProfileName,
}) {
  const {
    _id: currentUserId,
    profileImageName,
    profileName,
  } = useSelector(selectCurrentUser);
  const [message, setMessage] = useState("");
  const [createChat] = useCreateChatMutation();

  const { data, error, isLoading } = useGetChatsQuery(currentUserId);
  const urlPre = "../../data/uploads/";

  const handleMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSendMessage = () => {
    createChat({
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
    handleMessageClick();
    setMessage("");
  };
  return (
    <Wrapper>
      <aside className="quick-chat-main">
        <AiOutlineCloseCircle
          size={25}
          className="icon icon-close"
          onClick={handleMessageClick}
        />
        <div className="header">
          <img src={urlPre + recipientImageName} className="quick-chat-image" />
        </div>
        <div className="body">
          <textarea
            className="quick-chat-textarea"
            rows={8}
            placeholder="Type your message..."
            onChange={handleMessageChange}
          ></textarea>
          <button
            type="button"
            className="btn quick-chat-btn"
            onClick={handleSendMessage}
          >
            <AiOutlineSend size={25} />
          </button>
        </div>
      </aside>
    </Wrapper>
  );
}
