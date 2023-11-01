import Wrapper from "../assets/wrappers/FooterW";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <section className="footer-main gradient">
        <div className="footer-center">
          <Link to="/dashboard/home" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/payment" className="link">
            Tips
          </Link>
          <Link className="link">Contact</Link>
        </div>
      </section>
    </Wrapper>
  );
}
