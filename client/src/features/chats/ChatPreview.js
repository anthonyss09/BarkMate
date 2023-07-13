import Wrapper from "../../assets/wrappers/ChatPreviewW";
import jennieMax from "../../assets/images/jennie&maxSmall.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ChatPreview({
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
}
