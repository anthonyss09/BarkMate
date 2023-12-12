import styled from "styled-components";

const Wrapper = styled.aside`
  .alert-welcome-body {
    font-size: 0.8rem;
    line-height: 1.2rem;
    margin-bottom: 0.6rem;
  }
  .alert-welcome-center {
    height: min-content;
    width: 50vw;
    padding: 2rem;
    background: white;
    box-shadow: var(--shadow-main-light);
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    // border: 2px solid rgb(220, 220, 220);
    border: 1px solid var(--test-blue);
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .btn-continue {
    background: white;
    border: 2px solid black;
    color: black;
    text-align: center;
    color: var(--med-bright-blue);
  }
  .option-in {
    color: var(--med-bright-blue);
  }
  .option-out {
    color: rgb(180, 180, 180);
    color: var(--med-bright-blue);
  }
  .option-mailing {
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-left: 1rem;
  }
`;

export default Wrapper;
