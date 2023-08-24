import Wrapper from "../assets/wrappers/BigSidebarW";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlinePeople, MdOutlineMenuBook } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiCalendar, BiHome } from "react-icons/bi";
import { HiOutlineChat, HiHome } from "react-icons/hi";
import { GoCloudDownload } from "react-icons/go";
import { AiOutlineStar, AiFillStar, AiOutlineClose } from "react-icons/ai";

export default function BigSidebar({ handleClick }) {
  return (
    <Wrapper>
      <aside className="big-sidebar-main">
        <AiOutlineClose
          size={35}
          className="icon-close"
          onClick={handleClick}
        />
        <div className="big-sidebar-center">
          <div className="links-container-big">
            {" "}
            <Link className="link link-big link-download">
              <GoCloudDownload className="icon-download" size={35} />
              Download App
            </Link>
            <Link className="link link-big link-story">
              <MdOutlineMenuBook className="icon-book" size={25} />
              Story
            </Link>
            {/* <Link className="link link-big link-stars">
              <AiFillStar className="icon-star" size={10} />
              <AiFillStar className="icon-star" size={10} />
              <AiFillStar className="icon-star" size={10} />
              Verification stars
            </Link> */}
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
            {/* <Link
              to="/dashboard/groups"
              className="link link-big link-group"
              onClick={handleClick}
            >
              <IoIosPeople className="icon-groups" />
              Groups
            </Link> */}
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
          </div>
          <div className="links-container-small"></div>
        </div>
      </aside>
    </Wrapper>
  );
}
