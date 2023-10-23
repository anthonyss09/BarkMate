import styled from "styled-components";

const Wrapper = styled.div`
  .step {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--grey-180);
  }
  .step-arrow {
    margin-top: 0.2rem;
  }
  .step-arrow-active {
    color: var(--grey-60);
  }
  .steps-container {
    width: 100vw;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    // padding: 0 0.4rem;
    justify-content: center;
  }
  .step-active {
    color: black;
  }
  .step-circle {
    height: 2.8rem;
    width: 2.8rem;
    color: white;
    background: var(--grey-240);
    border-radius: 2rem;
    font-size: 2rem;
    display: grid;
    place-items: center;
  }
  .step-circle-one {
    background: var(--med-bright-blue);
    background: var(--test-blue);
    color: var(--federal-blue);
  }
  .step-circle-two {
    background: var(--test-red);
  }
  .step-circle-three {
    background: var(--med-green);
    background: var(--federal-blue);
  }
  .step-circle-active {
    box-shadow: 5px 2px 5px grey;
    margin-right: 0.4rem;
  }
  @media (max-width: 400px) {
    .step-circle {
      font-size: 1rem;
      height: 1.8rem;
      width: 2rem;
    }
    .steps-container {
      padding: 0 1rem;
    }
  }
`;

export default Wrapper;
