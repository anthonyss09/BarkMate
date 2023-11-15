import Wrapper from "../../assets/wrappers/ChatLineW";

export default function ChatLineUser({ profileImageUrl, text, shadow }) {
  return (
    <Wrapper>
      <div className="chat-line-user-main main">
        <p
          className={`chat-line-text chat-line-text-user ${
            shadow ? "shadow" : ""
          }`}
        >
          {text}
        </p>
        <img
          src={profileImageUrl}
          alt="user profile"
          className={`${shadow ? "" : ""}`}
        />
      </div>
    </Wrapper>
  );
}
