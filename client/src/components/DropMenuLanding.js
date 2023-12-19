import Wrapper from "../assets/wrappers/dropMenuLandingW";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function DropMenuLanding({ handleShowMenu }) {
  return (
    <Wrapper>
      <aside className="drop-menu-landing-main">
        <AiOutlineClose
          size={25}
          onClick={handleShowMenu}
          className="icon-close"
        />
        <Link to="/" className="link" onClick={handleShowMenu}>
          Home
        </Link>
        <Link to="/about" className="link" onClick={handleShowMenu}>
          About
        </Link>
        <Link to="/register" className="link" onClick={handleShowMenu}>
          Register
        </Link>
        <Link to="/contact" className="link" onClick={handleShowMenu}>
          Contact
        </Link>
        <Link to="/payment" className="link" onClick={handleShowMenu}>
          Contribute
        </Link>
        <div className="llc">
          Product of <Link className="link llc-link">ATOFFETTI DEV LLC</Link>
        </div>
      </aside>
    </Wrapper>
  );
}
