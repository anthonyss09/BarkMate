import Wrapper from "../assets/wrappers/NavW";
import Logo from "../components/Logo";
import { HiBars3 } from "react-icons/hi2";
import { FaRegUser, FaUser, FaUserCircle } from "react-icons/fa";
import { TbUserCircle } from "react-icons/tb";
import SmallSidebar from "../components/SmallSidebar";
import { useState } from "react";
import BigSidebar from "../components/BigSidebar";

export default function NavBar() {
  const [showSmallSidebar, setSmallShowSidebar] = useState(false);
  const [showBigSidebar, setShowBigSidebar] = useState(false);

  const handleSmallSidebar = () => {
    setSmallShowSidebar(!showSmallSidebar);
  };
  const handleBigSidebar = () => {
    setShowBigSidebar(!showBigSidebar);
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
          {showSmallSidebar && <SmallSidebar />}
        </span>
      </nav>
    </Wrapper>
  );
}
