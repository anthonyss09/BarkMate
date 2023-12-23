import styled from "styled-components";

const Wrapper = styled.main`
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
  }
  .form {
    border-radius: 0;
    padding-top: 1rem;
    width: 86vw;
    margin: 2rem;
  }
  .form-header {
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    letter-spacing: 0.05rem;
  }
  .p-bottom {
    margin-top: 0.4rem;
    color: var(--bark-pink);
  }
`;

export default Wrapper;
