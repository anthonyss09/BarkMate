import Wrapper from "../assets/wrappers/BigSidebarW";
import { Link } from "react-router-dom";
import { MdOutlinePeople, MdOutlineMenuBook } from "react-icons/md";
import { BiCalendar, BiHome } from "react-icons/bi";
import { HiOutlineChat } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";

export default function BigSidebar({ handleClick }) {
  return (
    <Wrapper>
      <aside className="big-sidebar-main">
        <div className="big-sidebar-center">
          <div className="links-container-big">
            <AiOutlineClose
              size={25}
              className="icon-close"
              onClick={handleClick}
            />{" "}
            <Link
              to="/dashboard/home"
              className="link link-big link-profiles"
              onClick={handleClick}
            >
              <BiHome className="icon-home" size={25} />
              Home
            </Link>
            <Link
              to="/dashboard/profiles"
              className="link link-big link-profiles"
              onClick={handleClick}
            >
              <MdOutlinePeople className="icon-profile" size={25} />
              Profiles
            </Link>
            <Link
              to="/dashboard/calender"
              className="link link-big link-calender"
              onClick={handleClick}
            >
              <BiCalendar className="icon-calender" size={25} />
              Calender
            </Link>
            <Link
              to="/dashboard/chats"
              className="link link-big link-chats"
              onClick={handleClick}
            >
              <HiOutlineChat className="icon-chat" size={25} />
              Chats
            </Link>
            <Link
              to="/about"
              className="link link-big link-story"
              onClick={handleClick}
            >
              <MdOutlineMenuBook className="icon-book" size={25} />
              About
            </Link>
            <Link
              to="/contact"
              className="link link-big link-chats"
              onClick={handleClick}
            >
              <MdMailOutline className="icon-chat" size={25} />
              Contact
            </Link>
          </div>
          <div className="links-container-small"></div>
        </div>
      </aside>
    </Wrapper>
  );
}
