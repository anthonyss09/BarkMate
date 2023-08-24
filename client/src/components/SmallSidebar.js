import Wrapper from "../assets/wrappers/SmallSidebarW";
import { Link } from "react-router-dom";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function SmallSidebar({
  handleClick,
  handleShowFriends,
  handleSmallSidebar,
}) {
  return (
    <Wrapper>
      <aside className="small-sidebar-main">
        <div className="icon-close" onClick={handleSmallSidebar}>
          {" "}
          <AiOutlineClose size={25} />
        </div>
        <div className="small-sidebar-center">
          <Link className="link" to="/userProfile">
            <FaUserCircle size={25} className="icon-user-circle" />
            Profile
          </Link>
          <Link className="link" onClick={handleShowFriends}>
            <FaUserFriends className="icon-friends" size={25} />
            Friends
          </Link>
          <div onClick={handleClick} className="link last-link">
            <BiLogOutCircle size={25} className="icon-logout" />
            Logout
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
