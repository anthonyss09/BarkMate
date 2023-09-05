import styled from "styled-components";

const Wrapper = styled.div`
  .comment-author {
    font-weight: bold;
  }
  .comment-body {
    border: 1px solid var(--test-blue);
    background: rgb(244, 244, 244);
    padding: 0.6rem 2rem;
    padding-left: 0.8rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    letter-spacing: 0.02rem;
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
    padding: 1rem 0;
    margin-left: 0.4rem;
    border-radius: 1.5rem;
    color: rgb(60, 60, 60);
    font-size: 0.75rem;
  }
  .no-border {
    border: none;
  }
`;

export default Wrapper;
