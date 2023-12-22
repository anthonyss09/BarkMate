import Wrapper from "../assets/wrappers/FooterW";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <section className="footer-center">
        <Link to="/dashboard/home" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/payment" className="link">
          Contribute
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </section>
      <div className="llc">
        Product of
        <br />{" "}
        <Link className="link llc-link">
          ATOFFETTI <br />
          DEV LLC
        </Link>
      </div>
      <div className="icon-credits">
        {" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/3muZdKSSpfsx/year-of-dog"
        >
          Dog
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </Wrapper>
  );
}
