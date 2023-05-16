import Wrapper from "../assets/wrappers/ChatPreviewW";
import jennieMax from "../assets/images/jennie&maxSmall.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ChatPreview() {
  return (
    <Wrapper>
      <aside className="chat-preview-main">
        {" "}
        <Link to="/profileid">
          <img src={jennieMax} className="chat-preview-image" />
        </Link>
        <div className="chat-preview-body">
          <div className="chat-name">Jennie & Max</div>
          <span className="chat-excerpt">this is a preview of our chat...</span>
        </div>
        {/* <div className="icon-arrow">
          <IoIosArrowForward size={30} />
        </div> */}
      </aside>
    </Wrapper>
  );
}
