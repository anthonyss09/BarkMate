import styled from "styled-components";
import meshGradient from "../images/mesh-gradient.png";

const Wrapper = styled.section`
  p {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
  h1 {
    text-align: center;
    font-size: 1.2rem;
    font-family: "Montserrat", sans-serif;
    color: black;
    margin-bottom: 0.4rem;
  }
  .chat-section-header {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .chat-section-main {
    // background-image: url(${meshGradient});
    padding: 2rem;
  }
`;
export default Wrapper;
