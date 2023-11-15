import styled from "styled-components";

const Wrapper = styled.div`
  img {
    height: 40px;
    width: 40px;
    border-radius: 4rem;
  }
  p {
    max-width: 54vw;
  }
  .chat-line-text {
    border-radius: 5rem;
    padding: 1rem 1.4rem;
    font-size: 0.8rem;
    letter-spacing: 0.02rem;
  }
  .chat-line-text-friend {
    background: var(--test-blue);
  }
  .chat-line-user-main {
    justify-content: flex-end;
  }
  .chat-line-text-user {
    background: rgb(244, 244, 244);
    color: var(--space-cadet);
  }
  .main {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .shadow {
    box-shadow: 10px 5px 10px rgb(40, 40, 40);
  }
  .white-background {
    background: white;
  }
`;

export default Wrapper;
