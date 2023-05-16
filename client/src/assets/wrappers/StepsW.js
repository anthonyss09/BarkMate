import styled from "styled-components";

const Wrapper = styled.section`
  .btn-step {
    height: 3.8rem;
    width: 14rem;
    padding: 0.8rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    margin: 2rem auto;
    margin-top: 1rem;
    border-radius: 0;
    background: var(--crystaly-blue);
    color: black;
  }
  .btn-step:hover {
    background: var(--grey-248);
  }
  .btn-text {
    margin-left: 1rem;
  }
  .steps-center {
    height: 100%;
    // width: 100%;
    width: 100vw;
    color: var(--grey-60);
    background: white;
    padding: 2rem 0;
  }
  .steps-heading {
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    color: var(--grey-60);
  }
  .steps-main {
    text-align: center;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--grey-248);
    padding: 0.4rem;
  }
  .icon-step {
    margin-right: 1rem;
    color: var(--federal-blue);
  }
  .btn-paw {
    color: var(--space-cadet);
    color: black;
  }
  .step {
    display: flex;
    align-items: center;
    border-radius: 2rem;
    margin: 0.8rem;
  }
  .steps-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 500px) {
  }
`;

export default Wrapper;
