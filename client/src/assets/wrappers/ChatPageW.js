import styled from "styled-components";

const Wrapper = styled.main`
  .chat-page-body {
    padding: 0.6rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .chat-page-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5rem;
    // background: rgb(248, 248, 248);
    // background: var(--test-blue);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border-top: 1px solid rgb(244, 244, 244);
  }
  .chat-page-header {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 0.6rem;
    border-bottom: 1px solid rgb(244, 244, 244);
    position: fixed;
    top: 0;
    background: white;
  }
  .chat-page-input {
    height: 40%;
    width: 80%;
    padding: 0.4rem;
    border-radius: 2rem;
    border: 2px solid rgb(220, 220, 220);
    text-align: center;
    font-size: 16px;
  }
  .chat-page-name {
    font-size: 1.2rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
  }
  .end-chat {
    height: 5rem;
  }
  .icon-send {
    color: rgb(60, 60, 60);
  }
  .start-chat {
    height: 4rem;
  }
`;

export default Wrapper;
