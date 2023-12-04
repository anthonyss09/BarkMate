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
    font-size: 1rem;
    margin-top: -1.6rem;
    letter-spacing: 0.05rem;
  }
  .form-main {
    padding-top: 4rem;
  }
  .form-header {
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    letter-spacing: 0.05rem;
  }
  .icon-bars {
    position: absolute;
    top: 1rem;
    left: 1rem;
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
