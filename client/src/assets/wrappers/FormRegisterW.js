import styled from "styled-components";

const Wrapper = styled.section`
  p {
    color: var(--grey-180);
    font-size: 0.8rem;
    max-width: 60vw;
  }
  .btn-register {
    width: 10rem;
    height: 4rem;
    margin-bottom: 1rem;
    border-radius: 3rem;
    color: white;
    background: var(--med-bright-blue);
    width: 82%;
    max-width: 320px;
  }
  .link-register {
    margin: 1rem 0;
  }
  .form-three {
    display: flex;
    flex-direction: column;
  }
  .form-header {
    max-width: 100%;
    min-height: 4rem;
  }
  .p-bottom {
    color: var(--grey-80);
    margin-bottom: 1rem;
  }
  .p-top {
    color: black;
    font-size: 1.2rem;
  }
  .span-login {
    color: var(--bark-pink);
  }

  @media (max-width: 400px) {
    .form-header {
      max-width: 86%;
    }
  }
`;

export default Wrapper;
