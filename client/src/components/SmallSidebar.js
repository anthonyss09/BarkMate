import Wrapper from "../assets/wrappers/SmallSidebarW";
import { Link } from "react-router-dom";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function SmallSidebar({
  handleClick,
  handleShowFriends,
  handleSmallSidebar,
  userId,
}) {
  return (
    <Wrapper>
      <button className="btn icon-close" onClick={handleSmallSidebar}>
        {" "}
        <AiOutlineClose size={25} />
      </button>
      <div className="small-sidebar-center">
        <Link className="link" to={`/${userId}`}>
          <FaUserCircle size={25} className="icon-user-circle" />
          <p>Profile</p>
        </Link>
        <Link className="link" onClick={handleShowFriends}>
          <FaUserFriends className="icon-friends" size={25} />
          <p>Friends</p>
        </Link>
        <div onClick={handleClick} className="link last-link">
          <BiLogOutCircle size={25} className="icon-logout" />
          <p>Logout</p>
        </div>
      </div>
    </Wrapper>
  );
}
