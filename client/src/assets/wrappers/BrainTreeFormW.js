import styled from "styled-components";

const Wrapper = styled.aside`
  p {
    color: var(--grey-180);
    font-size: 0.8rem;
    max-width: 60vw;
  }
  .btn-payment {
    // margin: 1rem 0;
    width: 100%;
    height: 48px;
    height: 52px;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    background: var(--test-blue);
    background: var(--space-cadet);
    color: white;
    padding: 0;
  }
  .btn-venmo {
    border: none;
    height: min-content;
    width: min-content;
    padding: 0;
    max-width: 335px;
    border-radius: 4rem;
  }
  .btn-venmo-container {
    // width: 100%;
    // margin: 1rem 0;
  }

  .form-payment {
    // gap: 0.4rem;
    margin-top: 4rem;
    // padding: 1rem;
    box-sizing: border-box;
    position: relative;
  }
  .form-payment-input {
    text-align: center;
    width: 300px;
  }
  .payment-header {
    // font-size: 1rem;
    // text-align: center;
    // padding: 0;
    // padding: 1rem;
    // color: white;
    // box-sizing: border-box;
    // width: 375px;
    // width: 100%;
    // color: var(--med-bright-blue);
    // color: var(--med-font-blue);
    // color: var(--space-cadet);

    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .p-bottom {
    color: var(--grey-80);
    color: var(--bark-pink);
    // color: var(--med-bright-blue);
    margin: 0.4rem 0;
  }
  .p-center {
    margin: 0.4rem 0;
    color: rgb(70, 70, 70);
  }
  .p-pink {
    width: 100%;
    padding: 0;
    margin: 0;
    // color: var(--bark-pink);
    color: var(--federal-blue);
    color: var(--space-cadet);
    color: black;
    font-size: 1rem;
  }
  .text-cadet {
    // color: var(--space-cadet);
    font-weight: bold;
  }
  @media (max-width: 400px) {
    .form-payment {
      margin-top: 3rem;
    }
  }
`;

export default Wrapper;
