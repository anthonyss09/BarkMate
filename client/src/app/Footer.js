import Wrapper from "../assets/wrappers/FooterW";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <section className="footer-main gradient">
        <div className="footer-center">
          <Link className="link">Join</Link>
          <Link className="link">FAQS</Link>
          <Link className="link">About</Link>
          <Link className="link">Contact</Link>
        </div>
      </section>
    </Wrapper>
  );
}
