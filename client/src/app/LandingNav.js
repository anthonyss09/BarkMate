import Wrapper from "../assets/wrappers/NavW";
import Logo from "../components/Logo";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropMenuLanding from "../components/DropMenuLanding";
import { useDispatch } from "react-redux";
import { setOverflowHidden } from "../features/alerts/alertsSlice";

export default function LandingNav({ hideNav }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    dispatch(setOverflowHidden());
  };
  return (
    <Wrapper>
      {showMenu && <DropMenuLanding handleShowMenu={handleShowMenu} />}

      <nav
        className={`nav-main nav-main-landing ${
          hideNav ? "hidden" : "scrolled-nav"
        }`}
      >
        <div className="bars" onClick={handleShowMenu}>
          {" "}
          <HiBars3 size={25} />
        </div>
        <Logo logoClass="logo-nav" iconClass="icon-payment" />
        <Link to="/login" className="link btn btn-login">
          login
        </Link>
      </nav>
    </Wrapper>
  );
}
