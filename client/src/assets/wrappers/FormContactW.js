import styled from "styled-components";

const Wrapper = styled.section`
  p {
    color: var(--grey-180);
    font-size: 0.8rem;
    max-width: 60vw;
  }
  .btn-contact {
    width: 100%;
    max-width: 330px;
    height: 3.6rem;
    background: white;
    color: var(--federal-blue);
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    border: 2px solid var(--med-font-blue);
    background: var(--med-font-blue);
    color: white;
    // color: var(--med-font-blue);
  }
  .form {
    border-radius: 0;
    padding-top: 1rem;
    width: 86vw;
  }
  .form-main {
    min-height: 0;
    height: min-content;
    padding: 1rem;
  }
  .form-header {
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    letter-spacing: 0.05rem;
  }
  .icon-bars {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  .icon-bars:hover {
    cursor: pointer;
  }
  .p-bottom {
    color: var(--grey-80);
    margin-top: 0.4rem;
  }
  .span-login {
    color: var(--bark-pink);
  }
`;

export default Wrapper;
