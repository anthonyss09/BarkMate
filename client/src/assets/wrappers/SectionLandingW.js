import styled from "styled-components";
import meshGradientTwo from "../images/mesh-gradient-3.png";

const Wrapper = styled.section`
  h1 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  p {
    width: 80%;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
  .btn-join {
    font-size: 1.2rem;
    font-weight: 400;
  }
  .btn-learn {
    border-radius: 0;
    width: 30vw;
    background: white;
    box-shadow: 2px 2px 5px grey;
    color: var(--test-red);
    background: var(--bark-pink);
    color: white;
    color: black;
  }
  .section-landing-image-jm {
    width: 70vw;
    border-radius: 1rem 1rem 0 0;
    border-radius: 1rem;
    margin-top: 4rem;
  }
  .section-landing-image-four {
    margin: 3rem;
    max-width: 65vw;
    max-height: 90vh;
  }
  .section-landing-center {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  .section-landing-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section-landing-main {
    background: var(--bark-pink);
  }
  .section-landing-main-two {
    background: var(--med-bright-blue);
  }
  .section-landing-main-four {
    // background: white;
    // padding-bottom: 1rem;
    border-bottom: 0.4rem solid white;
    height: 100vh;
  }
  .section-landing-heading {
    width: 100%;
    background: white;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    padding: 2.2rem 0;
    color: black;
  }
`;

export default Wrapper;
