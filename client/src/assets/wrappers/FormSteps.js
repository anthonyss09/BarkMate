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
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .step-active {
    color: black;
  }
  .step-circle {
    height: 2.8rem;
    width: 2.8rem;
    color: white;
    background: var(--grey-240);
    // padding: 0.2rem 0.4rem;
    border-radius: 2rem;
    font-size: 2rem;
    display: grid;
    place-items: center;
  }
  .step-circle-one {
    background: var(--test-blue);
    background: var(--med-bright-blue);
  }
  .step-circle-two {
    background: var(--sunglow);
    background: var(--bark-pink);
    background: var(--test-red);
  }
  .step-circle-three {
    background: var(--crystaly-green);
    background: var(--med-green);
  }
  .step-circle-active {
    // background: var(--crystal-blue-green);
    box-shadow: 5px 2px 5px grey;
  }
`;

export default Wrapper;
