import Wrapper from "../assets/wrappers/NavW";
import Logo from "../components/Logo";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import SmallSidebar from "../components/SmallSidebar";
import { useState } from "react";
import BigSidebar from "../components/BigSidebar";
import { logoutUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [showSmallSidebar, setSmallShowSidebar] = useState(false);
  const [showBigSidebar, setShowBigSidebar] = useState(false);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSmallSidebar = () => {
    setSmallShowSidebar(!showSmallSidebar);
  };
  const handleBigSidebar = () => {
    setShowBigSidebar(!showBigSidebar);
  };

  const handleClick = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Navigate("/");
  };

  return (
    <Wrapper>
      <nav className="nav-main ">
        <div className="nav-item bars">
          <HiBars3 size={25} onClick={handleBigSidebar} />
          {showBigSidebar && <BigSidebar handleClick={handleBigSidebar} />}
        </div>
        <Logo />
        <span className="icon-user" onClick={handleSmallSidebar}>
          <FaUserCircle size={25} />
          {showSmallSidebar && <SmallSidebar handleClick={handleClick} />}
        </span>
      </nav>
    </Wrapper>
  );
}
