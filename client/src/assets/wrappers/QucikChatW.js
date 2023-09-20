import styled from "styled-components";

const Wrapper = styled.div`
  .beat-loader {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 30vw;
  }
  .header-text {
    color: rgb(120, 120, 120);
  }
  .icon-close {
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
  }
  .icon-close:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  .icon:hover {
    cursor: pointer;
  }
  .quick-chat-center {
    transition: all 0.03s ease;
  }
  .quick-chat-btn {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    background: var(--test-blue);
  }
  .quick-chat-btn:hover {
    transform: scale(1.1);
  }
  .quick-chat-header {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .quick-chat-image {
    height: 40px;
    width: 40px;
    border-radius: 3rem;
  }
  .quick-chat-main {
    width: 80vw;
    height: 40vh;
    background: white;
    position: fixed;
    bottom: 3.5rem;
    right: 1.5rem;
    padding: 1rem;
    padding-top: 2rem;
    box-sizing: border-box;
    box-shadow: 5px 2px 5px grey;
    border-radius: 1rem;
    border: 1px solid var(--test-blue);
    transition: all 0.2s ease;
    z-index: 6;
  }
  .quick-chat-recipient {
    color: black;
  }
  .quick-chat-textarea {
    width: 100%;
    font-size: 16px;
    padding: 1rem;
    box-sizing: border-box;
    border: none;
    outline: none;
    resize: none;
    background: none;
  }
  .hidden {
    width: 0rem;
    padding: 0;
    box-shadow: none;
    border: none;
    background: none;
    overflow: hidden;
  }
  .no-display {
    display: none;
  }
  @media (max-width: 400px) {
    .quick-chat-main {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 55vh;
      z-index: 8;
      border-radius: 0;
      height: 100%;
    }
    .focused-height {
      height: 55vh;
    }
    .hidden {
      width: 0rem;
      padding: 0;
      box-shadow: none;
      border: none;
      background: none;
      overflow: hidden;
    }
    .quick-chat-textarea {
      margin-top: 2rem;
    }
  }
`;

export default Wrapper;
