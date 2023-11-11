import styled from "styled-components";

const Wrapper = styled.section`
  p {
    color: var(--grey-180);
    font-size: 0.8rem;
    max-width: 60vw;
  }
  .btn-contact {
    background: var(--med-bright-blue);
    color: white;
    width: 100%;
    height: 4rem;
    // height: 50px;
    font-size: 1rem;
  }
  .form-main {
    padding-top: 4rem;
  }
  .form-header {
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
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
