import Wrapper from "../assets/wrappers/SmallSidebarW";
import { Link } from "react-router-dom";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

export default function SmallSidebar({ handleClick }) {
  return (
    <Wrapper>
      <aside className="small-sidebar-main">
        <div className="small-sidebar-center">
          <Link className="link" to="/userProfile">
            <FaUserCircle />
            Profile
          </Link>
          <Link className="link">
            <FaUserFriends className="icon-friends" />
            Friends
          </Link>
          <div onClick={handleClick} className="link last-link">
            <BiLogOutCircle />
            Logout
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
