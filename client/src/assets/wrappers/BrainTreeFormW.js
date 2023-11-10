import styled from "styled-components";

const Wrapper = styled.aside`
  .btn-payment {
    margin: 1rem 0;
    width: 100%;
    height: 48px;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    background: var(--federal-blue);
    // background: var(--med-bright-blue);
    background: var(--charcoal);
    background: var(--space-cadet);
    color: white;
    padding: 0;
    background: black;
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
    margin: 1rem 0;
  }
  .form-payment {
    gap: 0.4rem;
    margin-top: 2rem;
    // padding: 1rem;
    box-sizing: border-box;
    position: relative;
  }
  .form-payment-input {
    text-align: center;
    width: 300px;
  }
  .payment-header {
    margin: 0;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    padding: 0;
    // font-weight: 400;
    color: white;
    box-sizing: border-box;
    width: 375px;
    width: 100%;
    margin-bottom: 1rem;
    color: var(--med-bright-blue);
    color: var(--med-font-blue);
    color: var(--space-cadet);
    font-weight: 400;
  }
  .text-cadet {
    // color: var(--space-cadet);
    font-weight: bold;
  }
`;

export default Wrapper;
