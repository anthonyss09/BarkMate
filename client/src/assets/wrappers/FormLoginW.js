import styled from "styled-components";

const Wrapper = styled.form`
  margin-top: 6rem;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min-content;

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

  .p-bottom {
    color: var(--grey-80);
    margin-bottom: 1rem;
  }
  .span-login {
    color: var(--bark-pink);
  }
`;

export default Wrapper;
