import Wrapper from "../assets/wrappers/AboutSW";
import { FaPaw } from "react-icons/fa";

export default function About() {
  return (
    <Wrapper>
      <section className="about-main">
        <div className="about-center">
          {" "}
          <h1 className="about-heading">For the love of dogs</h1>
          <p className="about-p">
            {" "}
            Dogs bring so much joy to our lives. Our favorite loyal loving
            companions, but some of us are away from home too long to give them
            the care they deserve. <br />
            BarkMate is here to help you connect with local mates with whom you
            can share walking responsibilites.
          </p>
        </div>
        <button className="btn btn-about">
          <span className="btn-paw">
            <FaPaw size={25} />
          </span>
          <span className="btn-text">Join </span>
        </button>
      </section>
    </Wrapper>
  );
}
