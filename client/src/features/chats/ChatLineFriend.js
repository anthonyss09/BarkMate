import Wrapper from "../../assets/wrappers/ChatLineW";
import deanBowie from "../../assets/images/dean&bowieSmall.jpg";
import { Link } from "react-router-dom";

export default function ChatLineFriend({
  profileImageUrl,
  text,
  participantId,
  shadow,
}) {
  return (
    <Wrapper>
      <div className="chat-line-friend-main main">
        <Link to={"/" + participantId}>
          <img src={profileImageUrl} className={`${shadow ? "" : ""}`} />
        </Link>

        <p
          className={`chat-line-text chat-line-text-friend ${
            shadow ? "shadow" : ""
          }`}
        >
          {text}
        </p>
      </div>
    </Wrapper>
  );
}
