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
    background: var(--grey-60);
    background: var(--med-bright-blue);
    width: 100%;
    font-size: 1rem;
  }
  .form-login {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .p-bottom {
    color: var(--grey-80);
    margin-bottom: 1rem;
  }
  .span-login {
    color: var(--bark-pink);
  }
`;

export default Wrapper;
