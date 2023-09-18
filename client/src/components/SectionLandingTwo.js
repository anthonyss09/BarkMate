import Wrapper from "../assets/wrappers/SectionLandingW";
import groupPreview from "../assets/images/groupPreview.jpg";

export default function HeaderTwo() {
  return (
    <Wrapper>
      <section className=" section-landing-main-two">
        <div className="section-landing-center-two">
          <div className="section-landing-heading">
            {" "}
            <h1> Join local groups for added backup & instant references.</h1>
            <button className="btn btn-join">join</button>
          </div>
          <img src={groupPreview} className="section-landing-image-jm" />
        </div>
      </section>
    </Wrapper>
  );
}
