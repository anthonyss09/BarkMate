import Wrapper from "../assets/wrappers/NavW";
import Logo from "../components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiBars3 } from "react-icons/hi2";

export default function LandingNav() {
  return (
    <Wrapper>
      <nav className="nav-main nav-main-landing">
        {" "}
        <div className="bars">
          {" "}
          <HiBars3 size={25} />
        </div>
        <Logo />
        <div className="btn btn-login">login</div>
      </nav>
    </Wrapper>
  );
}
