import Wrapper from "../../assets/wrappers/ChatPageW";
import { TbArrowBackUp } from "react-icons/tb";
import { useEffect } from "react";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGetChatsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useParams } from "react-router-dom";
import ChatLineFriend from "./ChatLineFriend";
import ChatLineUser from "./ChatLineUser";
import { useState } from "react";
import {
  useCreateChatMutation,
  // useUpdateWebSocketReadyStateMutation,
  useCreateNotificationMutation,
} from "../api/apiSlice";
import { selectWebSocketReadyState } from "./ChatsSlice";
import mongoose from "mongoose";

export default function ChatPage() {
  const {
    _id: userId,
    profileImageName,
    profileName,
  } = useSelector(selectCurrentUser);
  const { data, isLoading, isSuccess, error, refetch } =
    useGetChatsQuery(userId);
  const { chatId } = useParams();
  const id = new mongoose.Types.ObjectId();

  // const webSocketReadyState = useSelector(selectWebSocketReadyState);

  const [message, setMessage] = useState("");
  const [createChat] = useCreateChatMutation();
  // const [updateWebSocketReadyState] = useUpdateWebSocketReadyStateMutation();
  const [createNotification] = useCreateNotificationMutation();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleMessageSend = () => {
    createChat({
      participants: [
        {
          participantId: userId,
          participantProfileName: profileName,
          participantImageName: profileImageName,
        },
        {
          participantId: friend.participantId,
          participantProfileName: friend.participantImageName,
          participantImageName: friend.participantProfileName,
        },
      ],
      message: {
        sender: userId,
        recipient: friend.participantId,
        content: message,
      },
    });
    createNotification({
      _id: id,
      chatId,
      recipient: friend.participantId,
      sender: userId,
      senderProfileImageName: profileImageName,
      senderProfileName: profileName,
      notificationPath: "chats",
      notificationType: "message",
      is_read: false,
      is_viewed: false,
    });
    setMessage("");
  };

  useEffect(() => {
    let lastTime = new Date().getTime();

    setInterval(function () {
      let currentTime = new Date().getTime();
      if (currentTime > lastTime + 2000 * 1.5) {
        window.location.reload(true);
      }
      lastTime = currentTime;
    }, 2000);
  }, []);

  useEffect(() => {
    const lastElement = document.getElementById("end-chat");
    const scrollToBottom = () => {
      lastElement.scrollIntoView();
    };
    scrollToBottom();
  }, [data]);

  let messages;
  let content;
  let thisChat;
  let friend;
  let user;
  if (isLoading) {
    content = <div>loading</div>;
  } else if (isSuccess) {
    thisChat = data.chats.filter((chat) => chat._id == chatId)[0];
    friend = thisChat.participants.friend;
    user = thisChat.participants.user;
    messages = thisChat.messages;

    content = messages.map((message, index) => {
      if (message.sender == userId) {
        return (
          <ChatLineUser
            key={index}
            text={message.content}
            imageName={user.participantImageName}
          />
        );
      } else {
        return (
          <ChatLineFriend
            key={index}
            text={message.content}
            imageName={friend.participantImageName}
          />
        );
      }
    });
  } else if (error) {
    content = <div>{error.toString()}</div>;
  }

  // useEffect(() => {
  //   console.log("change", webSocketReadyState);
  //   if (webSocketReadyState == 0 || webSocketReadyState == 3) {
  //     updateWebSocketReadyState();
  //     console.log("updated socket connection");
  //     refetch();
  //     console.log("refetched");
  //   }
  // }, [webSocketReadyState]);

  return (
    <Wrapper>
      <div className="chat-page-main">
        <div className="chat-page-header">
          <Link to="/dashboard/chats" className="link">
            {" "}
            <TbArrowBackUp size={25} />
          </Link>
          <h1 className="chat-page-name">Dean & Bowie</h1>
        </div>
        <div className="start-chat"></div>
        <div className="chat-page-body">
          {content}
          <div className="end-chat" id="end-chat"></div>;
        </div>
        <div className="chat-page-footer">
          <input
            type="text"
            placeholder="Write a message"
            className="chat-page-input"
            value={message}
            onChange={handleInputChange}
          />
          <BsSend size={35} className="icon-send" onClick={handleMessageSend} />
        </div>
      </div>
    </Wrapper>
  );
}
