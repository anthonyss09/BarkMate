import styled from "styled-components";

const Wrapper = styled.div`
  .comment-author {
    font-weight: bold;
  }
  .comment-image {
    height: 40px;
    width: 40px;
    border-radius: 5rem;
  }
  .comment-row {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem;
    margin: 0 1rem 0 1rem;
    border-radius: 1.5rem;
    // border: 2px solid var(--test-blue);
    color: rgb(60, 60, 60);
    font-size: 0.8rem;
  }
  .comment-body {
    border: 1px solid var(--test-blue);
    background: var(--test-blue);
    background: rgb(244, 244, 244);
    padding: 0.4rem 1rem 0.6rem 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .no-border {
    border: none;
  }
`;

export default Wrapper;
