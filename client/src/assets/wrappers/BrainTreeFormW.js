import styled from "styled-components";

const Wrapper = styled.aside`
  p {
    color: var(--grey-180);
    font-size: 0.8rem;
    max-width: 60vw;
  }
  .btn-payment {
    width: 100%;
    height: 52px;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
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
  }

  .form-payment {
    margin-top: 4rem;
    box-sizing: border-box;
    position: relative;
  }
  .form-payment-input {
    text-align: center;
    width: 300px;
  }
  .payment-header {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .p-bottom {
    color: var(--bark-pink);
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
    color: black;
    font-size: 1rem;
  }
  .text-cadet {
    font-weight: bold;
  }
  @media (max-width: 400px) {
    .form-payment {
      margin-top: 3rem;
    }
  }
`;

export default Wrapper;
