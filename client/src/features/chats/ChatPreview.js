import Wrapper from "../../assets/wrappers/ChatPreviewW";
import { Link } from "react-router-dom";
import { memo } from "react";

export default memo(function ChatPreview({
  imageName,
  message,
  profileName,
  chatId,
}) {
  const urlPre = "../../data/uploads/";
  const { content } = message;
  return (
    <Wrapper>
      <Link to={"/chats/" + chatId} className="link">
        {" "}
        <aside className="chat-preview-main">
          {" "}
          <div to="/profileid">
            <img src={urlPre + imageName} className="chat-preview-image" />
          </div>
          <div className="chat-preview-body">
            <div className="chat-name">{profileName}</div>
            <span className="chat-excerpt">{content}</span>
          </div>
        </aside>
      </Link>
    </Wrapper>
  );
});
