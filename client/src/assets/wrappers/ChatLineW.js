import styled from "styled-components";

const Wrapper = styled.div`
  img {
    height: 50px;
    width: 50px;
    border-radius: 4rem;
  }
  p {
    max-width: 54vw;
  }
  .chat-line-user-main {
    justify-content: flex-end;
  }
  .chat-line-text {
    border-radius: 5rem;
    padding: 1rem 1.4rem;
    font-size: 0.8rem;
  }
  .chat-line-text-friend {
    background: rgb(248, 248, 248);
  }
  .chat-line-text-user {
    background: var(--test-blue);
  }
  .main {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export default Wrapper;
