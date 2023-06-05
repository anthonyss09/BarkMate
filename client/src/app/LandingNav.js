import Wrapper from "../assets/wrappers/NavW";
import Logo from "../components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function LandingNav({ hideNav }) {
  return (
    <Wrapper>
      <nav
        className={`nav-main nav-main-landing ${
          hideNav ? "hidden" : "scrolled-nav"
        }`}
      >
        {" "}
        <div className="bars">
          {" "}
          <HiBars3 size={25} />
        </div>
        <Logo />
        <Link to="/dashboard/home" className="link btn btn-login">
          login
        </Link>
      </nav>
    </Wrapper>
  );
}
