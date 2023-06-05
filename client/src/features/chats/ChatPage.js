import Wrapper from "../../assets/wrappers/ChatPageW";
import ChatLineFriend from "./ChatLineFriend";
import ChatLineUser from "./ChatLineUser";
import { TbArrowBackUp } from "react-icons/tb";
import { useEffect } from "react";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ChatPage() {
  useEffect(() => {
    const lastElement = document.getElementById("end-chat");

    const scrollToBottom = () => {
      lastElement.scrollIntoView();
    };
    scrollToBottom();
  }, []);
  return (
    <Wrapper>
      <div className="chat-page-main">
        <div className="chat-page-header">
          <Link to="/dashboard/chats" className="link">
            {" "}
            <TbArrowBackUp size={25} />
          </Link>
          <h1 className="chat-page-name">Dean & Bowie</h1>
        </div>
        <div className="start-chat"></div>
        <div className="chat-page-body">
          <ChatLineFriend text="Hi! nice to connect!" />
          <ChatLineUser text="Same! Love your dog, shall we meeet?" />
          <ChatLineFriend text="Sure! When are you available to meet? There is a nice park in town called shady tree park, have you been?" />
          <ChatLineUser text="Yeah, I love that place! Me and Max go all the time, we'll be there tomorrow afternoon. Want to join?" />
          <ChatLineFriend text="Sounds Great! We'll be at the entrance around 1pm, sound good?" />
          <ChatLineUser text="Great! Looking forward to it!" />
          <ChatLineFriend text="Same! See you tomorrow!" />
          <ChatLineUser text="See you then!" />
          <ChatLineFriend text="Hi! nice to connect!" />
          <ChatLineUser text="Same! Love your dog, shall we meeet?" />
          <ChatLineFriend text="Sure! When are you available to meet? There is a nice park in town called shady tree park, have you been?" />
          <ChatLineUser text="Yeah, I love that place! Me and Max go all the time, we'll be there tomorrow afternoon. Want to join?" />
          <ChatLineFriend text="Sounds Great! We'll be at the entrance around 1pm, sound good?" />
          <div className="end-chat" id="end-chat"></div>
        </div>
        <div className="chat-page-footer">
          <input
            type="text"
            placeholder="Write a message"
            className="chat-page-input"
          />
          <BsSend size={35} className="icon-send" />
        </div>
      </div>
    </Wrapper>
  );
}
