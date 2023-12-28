import Wrapper from "../../assets/wrappers/ChatPreviewW";
import { Link } from "react-router-dom";
import { memo } from "react";

export default memo(function ChatPreview({
  profileImageUrl,
  message,
  profileName,
  chatId,
}) {
  const { content } = message;
  return (
    <Wrapper>
      <Link to={"/chats/" + chatId} className="link">
        {" "}
        <div className="chat-preview-main">
          {" "}
          <div to="/profileid">
            <img
              src={profileImageUrl}
              className="chat-preview-image"
              alt="user profile"
            />
          </div>
          <section className="chat-preview-body">
            <div className="chat-name">{profileName}</div>
            <div className="chat-excerpt">{content}</div>
          </section>
        </div>
      </Link>
    </Wrapper>
  );
});
