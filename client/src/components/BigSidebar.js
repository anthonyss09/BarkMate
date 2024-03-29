import Wrapper from "../assets/wrappers/BigSidebarW";
import { Link } from "react-router-dom";
import { MdOutlinePeople, MdOutlineMenuBook } from "react-icons/md";
import { BiCalendar, BiHome } from "react-icons/bi";
import { HiOutlineChat } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { IoLogoVenmo } from "react-icons/io5";

export default function BigSidebar({ handleClick }) {
  return (
    <Wrapper>
      <section className="big-sidebar-center">
        <button className="btn">
          {" "}
          <AiOutlineClose
            size={25}
            className="icon-close"
            onClick={handleClick}
          />
        </button>

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
          <MdMailOutline className="icon-contact" size={25} />
          Contact
        </Link>
        <Link
          to="/payment"
          className="link link-big link-chats"
          onClick={handleClick}
        >
          <IoLogoVenmo className="icon-chat" size={25} />
          Contribute
        </Link>
      </section>
    </Wrapper>
  );
}
