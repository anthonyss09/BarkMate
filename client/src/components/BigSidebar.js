import Wrapper from "../assets/wrappers/BigSidebarW";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlinePeople, MdOutlineMenuBook } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiCalendar, BiHome } from "react-icons/bi";
import { HiOutlineChat, HiHome } from "react-icons/hi";
import { GoCloudDownload } from "react-icons/go";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function BigSidebar({ handleClick }) {
  return (
    <Wrapper>
      <aside className="big-sidebar-main">
        <div className="big-sidebar-center">
          <AiOutlineCloseCircle
            size={25}
            className="icon-close"
            onClick={handleClick}
          />
          <div className="links-container-big">
            {" "}
            <Link className="link link-big link-download">
              <GoCloudDownload className="icon-download" />
              Download App
            </Link>
            <Link className="link link-big link-stars">
              {/* <AiOutlineStar className="icon-star" />
              <AiOutlineStar className="icon-star" /> */}
              <AiOutlineStar className="icon-star" />
              Verification stars
            </Link>
            <Link className="link link-big link-story">
              <MdOutlineMenuBook className="icon-book" />
              Story
            </Link>
          </div>
          <div className="links-container-small">
            <Link className="link link-small link-profiles">
              <BiHome className="icon-home" />
              Home
            </Link>
            <Link className="link link-small link-profiles">
              <MdOutlinePeople className="icon-profile" />
              Profiles
            </Link>
            <Link className="link link-small link-group">
              <IoIosPeople className="icon-groups" />
              Groups
            </Link>
            <Link className="link link-small link-calender">
              <BiCalendar className="icon-calender" />
              Calender
            </Link>
            <Link className="link link-small link-chats">
              <HiOutlineChat className="icon-chat" />
              Chats
            </Link>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
