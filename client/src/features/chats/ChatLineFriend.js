import Wrapper from "../../assets/wrappers/ChatLineW";
import deanBowie from "../../assets/images/dean&bowieSmall.jpg";

export default function ChatLineFriend({ imageName, text }) {
  const urlPre = "../../data/uploads/";
  return (
    <Wrapper>
      <div className="chat-line-friend-main main">
        <img src={urlPre + imageName} />
        <p className="chat-line-text chat-line-text-friend">{text}</p>
      </div>
    </Wrapper>
  );
}
