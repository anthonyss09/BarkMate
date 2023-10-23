import Wrapper from "../../assets/wrappers/DashChatsW";
import ChatPreview from "./ChatPreview";
import { useEffect } from "react";
import { useGetChatsQuery } from "../chats/ChatsSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import BeatLoader from "react-spinners/BeatLoader";

export default function DashChats() {
  const {
    _id: userId,
    profileImageName,
    profileName: currentUserProfileName,
  } = useSelector(selectCurrentUser);
  const { data, error, isLoading } = useGetChatsQuery(userId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let chatPreviews;
  if (isLoading) {
    chatPreviews = (
      <BeatLoader color="lightBlue" size={25} className="beat-loader" />
    );
  } else if (!Object.keys(data).length) {
    chatPreviews = (
      <div className="no-content">No chats to display. Hit someone up!</div>
    );
  } else {
    // console.log(data);
    chatPreviews = Object.values(data).map((chat, index) => {
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
      <main className="dash-chats-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Chats</h1>
        </div>
        <div className="dash-chats-center">{chatPreviews}</div>
      </main>
    </Wrapper>
  );
}
