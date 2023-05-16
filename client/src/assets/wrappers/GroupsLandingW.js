import styled from "styled-components";

const Wrapper = styled.section`
  h1 {
    height: 2rem;
    font-size: 0.7rem;
    text-align: center;
    color: var(--grey-100);
    color: black;
  }
  img {
    width: 25vw;
    height: 15vh;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 1rem;
  }
  .groups {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .image-container {
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem;
    background: white;
    border-radius: 0.5rem;
    gap: 0.4rem;
  }
  .image-dogs {
    margin-top: -10rem;
    border: 3px solid var(--space-cadet);
  }
  .main {
    background: var(--grey-248);
  }
  p {
    text-align: center;
    font-size: 1.2rem;
  }
  .sub {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .text {
    color: black;
  }
`;

export default Wrapper;
