import styled from "styled-components";

const Wrapper = styled.div`
  .form-input {
    border-radius: 1.5rem;
    height: 2rem;
    border: 2px solid var(--grey-240);
    color: var(--grey-220);
    padding-left: 0.8rem;
    background: none;
    font-size: 16px;
  }
  .form-label {
    font-weight: bold;
    font-size: 0.8rem;
    color: var(--grey-100);
  }
  .form-row {
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.2rem;
    position: relative;
  }
`;

export default Wrapper;
