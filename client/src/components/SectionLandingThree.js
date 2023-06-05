import Wrapper from "../assets/wrappers/SectionLandingW";

export default function HeaderTwo() {
  return (
    <Wrapper>
      <section className="section-landing-main section-landing-main-two">
        <div className="section-landing-center">
          <div className="section-landing-heading">
            {" "}
            <h1>Why BarkMate</h1>
            <p>
              Dogs bring so much joy to our lives. Our favorite loyal loving
              companions, but some of us are away from home too long to give
              them the care they deserve. <br />
              BarkMate is here to help you connect with local mates with whom
              you can share walking responsibilites.
            </p>
            <button className="btn btn-learn">Learn more</button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
