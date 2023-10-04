import styled from "styled-components";
import confusedPug from "../images/confusedPug.jpg";

const Wrapper = styled.section`
  .error-code {
    font-size: 3rem;
  }
  .page-not-found-main {
    background-image: url(${confusedPug});
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }
  .page-not-found-center {
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    position: absolute;
    top: 4rem;
    letter-spacing: 0.04rem;
  }
`;

export default Wrapper;
