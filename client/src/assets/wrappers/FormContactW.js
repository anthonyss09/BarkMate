import styled from "styled-components";

const Wrapper = styled.section`
  p {
    color: var(--grey-180);
    font-size: 0.8rem;
    max-width: 60vw;
  }
  .btn-contact {
    width: 100%;
    height: 4rem;
    // background: var(--med-bright-blue);
    // color: white;
    background: white;
    color: var(--federal-blue);
    font-size: 1.1rem;
    margin-top: -1.6rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    // border: 2px solid black;
    font-weight: 600;
  }
  .form {
    border-top: 10px solid rgb(200, 200, 200);
    border-bottom: 10px solid rgb(200, 200, 200);

    border-radius: 0;
    padding: 1rem 0;
    width: 86vw;
    // max-width: 78vw;
  }
  .form-main {
    padding-top: 2rem;
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
  .llc-link {
    color: var(--light-bright-blue);
    font-weight: bold;
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
