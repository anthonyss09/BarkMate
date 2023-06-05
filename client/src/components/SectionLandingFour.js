import Wrapper from "../assets/wrappers/SectionLandingW";
import chatExample from "../assets/images/chatExample.jpeg";

export default function SectionLanding() {
  return (
    <Wrapper>
      <section className="section-landing-main section-landing-main-four">
        <div className="section-landing-center">
          {/* <div className="section-landing-heading">
            {" "}
            <h1> Connect with local mates & share walking responsibilites.</h1>
            <button className="btn btn-join">join</button>
          </div> */}
          <img
            src={chatExample}
            className="section-landing-image-jm section-landing-image-four"
          />
        </div>
      </section>
    </Wrapper>
  );
}
