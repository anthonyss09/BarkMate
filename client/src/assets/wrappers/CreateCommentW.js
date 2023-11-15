import styled from "styled-components";

const Wrapper = styled.aside`
  .btn-send {
    height: 3rem;
    width: 3rem;
    background: var(--med-bright-blue);
    color: white;
    display: block;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .post-comment-body {
    border-top: 1px solid rgb(240, 240, 240);
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .post-comment-body-pic {
    width: 85vw;
  }
  .post-comment-date {
    font-size: 0.2rem;
    color: rgb(100, 100, 100);
    background: rgb(240, 240, 240);
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
  }
  .post-comment-heading {
    padding-bottom: 0.3rem;
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }
  .post-comment-input-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.8rem 0.4rem;
    box-sizing: border-box;
  }
  .post-comment-heading-pic {
    height: 30px;
    width: 30px;
    border-radius: 2rem;
  }
  .post-comment-name {
    font-weight: bold;
    font-size: 0.3rem;
    line-height: 0.6rem;
  }
  .post-comment-preview {
    width: min-content;
    margin-left: 1.2rem;
  }
  .post-comment-row {
    width: 100%;
    height: 100%;
    background: white;
    position: fixed;
    bottom: 0;
    z-index: 25;
    overflow-y: scroll;
  }
  .post-comment-text {
    font-size: 0.3rem;
    padding: 0.2rem 0;
  }
`;

export default Wrapper;
