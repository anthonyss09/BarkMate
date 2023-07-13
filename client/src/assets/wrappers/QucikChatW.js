import styled from "styled-components";

const Wrapper = styled.div`
  .icon-close {
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
  }
  .icon-close:hover {
    transform: scale(1.1);
  }
  .icon:hover {
    cursor: pointer;
  }
  .quick-chat-btn {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    background: var(--test-blue);
    // box-shadow: 5px 2px 5px grey;
  }
  .quick-chat-btn:hover {
    // box-shadow: 5px 2px 5px grey;
    transform: scale(1.1);
  }
  .quick-chat-image {
    height: 60px;
    width: 60px;
    border-radius: 3rem;
  }
  .quick-chat-main {
    width: 80vw;
    height: 40vh;
    background: white;
    position: fixed;
    bottom: 30vh;
    left: 10vw;
    box-shadow: 2px 2px 8px rgb(110, 110, 110);
    box-shadow: 5px 2px 5px grey;
    border-radius: 1rem;
    padding: 1rem;
    padding-top: 2rem;
    box-sizing: border-box;
    border: 1px solid rgb(220, 220, 220);
  }
  .quick-chat-textarea {
    width: 100%;
    font-size: 16px;
    padding: 1rem;
    box-sizing: border-box;
    border: none;
    outline: none;
    resize: none;
  }
`;

export default Wrapper;
