import Wrapper from "../../assets/wrappers/ChatLineW";
import jennieMax from "../../assets/images/jennie&maxSmall.jpg";

export default function ChatLineUser({ profileImageUrl, text }) {
  return (
    <Wrapper>
      <div className="chat-line-user-main main">
        <p className="chat-line-text chat-line-text-user">{text}</p>
        <img src={profileImageUrl} />
      </div>
    </Wrapper>
  );
}
