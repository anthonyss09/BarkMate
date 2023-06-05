import Wrapper from "../assets/wrappers/SmallSidebarW";
import { Link } from "react-router-dom";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

export default function SmallSidebar() {
  return (
    <Wrapper>
      <aside className="small-sidebar-main">
        <div className="small-sidebar-center">
          <Link className="link">
            <FaUserCircle />
            Profile
          </Link>
          <Link className="link">
            <FaUserFriends className="icon-friends" />
            Friends
          </Link>
          <Link to="/" className="link last-link">
            <BiLogOutCircle />
            Logout
          </Link>
        </div>
      </aside>
    </Wrapper>
  );
}
