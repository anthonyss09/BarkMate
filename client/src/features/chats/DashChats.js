import Wrapper from "../../assets/wrappers/DashChatsW";
import ChatPreview from "./ChatPreview";
import { useEffect } from "react";
import { useGetChatsQuery } from "../chats/ChatsSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import DotLoader from "react-spinners/DotLoader";

export default function DashChats() {
  const { _id: userId } = useSelector(selectCurrentUser);
  const { data, isLoading } = useGetChatsQuery(userId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let chatPreviews;
  if (isLoading) {
    chatPreviews = (
      <div className="alert-container">
        <DotLoader color="lightBlue" size={85} className="beat-loader" />
      </div>
    );
  } else if (!Object.keys(data).length) {
    chatPreviews = (
      <p className="no-content">No chats to display. Hit someone up!</p>
    );
  } else {
    // console.log(data);
    const sortedChats = Object.values(data).sort((a, b) => {
      const aDate = new Date(a.updatedAt);
      const bDate = new Date(b.updatedAt);
      return bDate - aDate;
    });
    // console.log(Object.values(data));
    chatPreviews = sortedChats.map((chat, index) => {
      return (
        <ChatPreview
          profileImageUrl={chat.participants.friend.participantProfileImageUrl}
          message={chat.messages[chat.messages.length - 1]}
          key={index}
          profileName={chat.participants.friend.participantProfileName}
          chatId={chat._id}
        />
      );
    });
  }

  return (
    <Wrapper>
      <div className="dash-header">
        <h1 className="dash-page-name">Chats</h1>
      </div>
      <div className="dash-chats-center">{chatPreviews}</div>
    </Wrapper>
  );
}
