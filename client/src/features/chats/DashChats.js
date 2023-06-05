import Wrapper from "../../assets/wrappers/DashChatsW";
import ChatPreview from "./ChatPreview";

export default function DashChats() {
  return (
    <Wrapper>
      <main className="dash-chats-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Chats</h1>
        </div>
        <div className="dash-chats-center">
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
        </div>
      </main>
    </Wrapper>
  );
}
