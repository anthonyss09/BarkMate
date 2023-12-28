import Wrapper from "../../assets/wrappers/ChatPageW";
import { TbArrowBackUp } from "react-icons/tb";
import { useEffect } from "react";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useParams } from "react-router-dom";
import ChatLineFriend from "./ChatLineFriend";
import ChatLineUser from "./ChatLineUser";
import { useState } from "react";
import { useCreateChatMutation, useGetChatsQuery } from "../chats/ChatsSlice";
import { useCreateNotificationMutation } from "../notifications/NotificationsSlice";
import mongoose from "mongoose";
import DotLoader from "react-spinners/DotLoader";
import { useNavigate } from "react-router-dom";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import { selectAlertsInfo } from "../alerts/alertsSlice";
import Alert from "../alerts/Alert";
import { logoutUser } from "../auth/authSlice";

export default function ChatPage() {
  const {
    _id: userId,
    profileName,
    profileImageUrl,
  } = useSelector(selectCurrentUser);
  const { data, isLoading, isSuccess, error } = useGetChatsQuery(userId);
  const { chatId } = useParams();
  const id = new mongoose.Types.ObjectId();

  const [message, setMessage] = useState("");
  const [createChat] = useCreateChatMutation();
  const [createNotification] = useCreateNotificationMutation();

  const { showAlert, alertMessage, alertType } = useSelector(selectAlertsInfo);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleMessageSend = async () => {
    if (profileName === "Demo") {
      dispatch(
        displayAlert({
          alertType: "danger",
          alertMessage: "Create a profile to send messages.",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      return;
    }
    const newChat = await createChat({
      participants: [
        {
          participantId: userId,
          participantProfileName: profileName,
          participantProfileImageUrl: profileImageUrl,
        },
        {
          participantId: friend.participantId,
          participantProfileName: friend.participantImageName,
          participantProfileImageUrl: friend.participantProfileImageUrl,
        },
      ],
      message: {
        sender: userId,
        recipient: friend.participantId,
        content: message,
      },
    });

    if (newChat.error) {
      dispatch(
        displayAlert({
          alertMessage: newChat.error.data.message,
          alertType: "danger",
        })
      );
      console.log(newChat.error.data.message);
    } else if (newChat.data) {
      createNotification({
        _id: id,
        chatId,
        recipient: friend.participantId,
        sender: userId,
        senderProfileImageUrl: profileImageUrl,
        senderProfileName: profileName,
        notificationPath: "chats",
        notificationType: "message",
        is_read: false,
        is_viewed: false,
      });
    }

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
  let friend = {
    profileName: "",
  };
  let user;
  if (isLoading) {
    content = (
      <div className="alert-container">
        <DotLoader color="lightBlue" size={85} className="beat-loader" />
      </div>
    );
  } else if (isSuccess) {
    thisChat = Object.values(data).filter((chat) => chat._id === chatId)[0];
    if (thisChat === undefined) {
      Navigate("/");
    }
    // console.log("this chat", thisChat);
    friend = thisChat.participants.friend;
    user = thisChat.participants.user;
    messages = thisChat.messages;

    content = messages.map((message, index) => {
      if (message.sender === userId) {
        return (
          <ChatLineUser
            key={index}
            text={message.content}
            profileImageUrl={user.participantProfileImageUrl}
          />
        );
      } else {
        return (
          <ChatLineFriend
            key={index}
            text={message.content}
            profileImageUrl={friend.participantProfileImageUrl}
            participantId={friend.participantId}
          />
        );
      }
    });
  } else if (error) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <Wrapper>
      {showAlert && (
        <div className="alert-container">
          <Alert alertMessage={alertMessage} alertType={alertType} />
        </div>
      )}

      <div className="chat-page-header">
        <Link to="/dashboard/chats" className="link">
          {" "}
          <TbArrowBackUp size={25} />
        </Link>
        <h1 className="chat-page-name">{friend.participantProfileName}</h1>
      </div>
      <div className="start-chat"></div>
      <section className="chat-page-body">
        {content}
        <div className="end-chat" id="end-chat"></div>
      </section>
      <section className="chat-page-footer">
        <input
          type="text"
          placeholder="Write a message"
          className="chat-page-input"
          value={message}
          onChange={handleInputChange}
        />
        <button className="btn">
          {" "}
          <BsSend size={35} className="icon-send" onClick={handleMessageSend} />
        </button>
      </section>
    </Wrapper>
  );
}
