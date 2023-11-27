import styled from "styled-components";

const Wrapper = styled.section`
  .error-code {
    font-size: 3rem;
  }
  .icon-bone {
    margin-left: -8rem;
    color: var(--bark-pink);
  }
  .icon-dog {
    margin-top: -2rem;
    margin-right: -6rem;
  }
  .icon-dog-house {
    margin-top: -3rem;
    margin-left: -6rem;
    color: var(--federal-blue);
  }
  .page-not-found-main {
    padding: 8rem 2rem;
  }
  .page-not-found-center {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
  }
`;

export default Wrapper;
