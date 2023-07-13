import Wrapper from "../../assets/wrappers/DashChatsW";
import ChatPreview from "./ChatPreview";
import { useEffect } from "react";
import { useGetChatsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import BeatLoader from "react-spinners/BeatLoader";

export default function DashChats() {
  const {
    _id: userId,
    profileImageName,
    profileName: currentUserProfileName,
  } = useSelector(selectCurrentUser);
  const { data, isLoading, error } = useGetChatsQuery(userId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data);

  let chatPreviews;
  if (isLoading) {
    chatPreviews = (
      <BeatLoader color="silver" size={25} className="beat-loader" />
    );
  } else if (!data.chats.length) {
    chatPreviews = <div>no chats</div>;
  } else {
    chatPreviews = data.chats.map((chat, index) => {
      return (
        <ChatPreview
          imageName={chat.participants.friend.participantImageName}
          message={chat.messages[chat.messages.length - 1]}
          key={index}
          profileName={chat.participants.friend.participantProfileName}
          chatId={chat._id}
        />
      );
    });
  }

  // const chatPreviews = data.chats.length ? (
  //   data.chats.map((chat, index) => {
  //     return (
  //       <ChatPreview
  //         imageName={chat.participants.sender.participantImageName}
  //         message={chat.messages[chat.messages.length - 1]}
  //         key={index}
  //         profileName={chat.participants.sender.participantProfileName}
  //         chatId={chat._id}
  //       />
  //     );
  //   })
  // ) : (
  //   <div>nochats</div>
  // );

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
