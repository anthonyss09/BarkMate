import Wrapper from "../assets/wrappers/SectionLandingW";
import profilePreviewJM from "../assets/images/profilePreview2.jpg";

export default function SectionLanding() {
  return (
    <Wrapper>
      <section className="section-landing-main">
        <div className="section-landing-center">
          <div className="section-landing-heading">
            <h1>Connect with local mates & share walking responsibilites.</h1>
            <button className="btn btn-join">join</button>
          </div>
          <img src={profilePreviewJM} className="section-landing-image-jm" />
        </div>
      </section>
    </Wrapper>
  );
}
