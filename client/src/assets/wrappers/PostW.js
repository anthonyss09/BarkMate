import styled from "styled-components";

const Wrapper = styled.aside`
  .btn-send {
    width: 100%;
    width: 94%;
    margin: 0 auto;
    // width: 4rem;
    border-radius: 5rem;
    height: 4rem;
    background: var(--test-blue);
    // background: var(--med-font-blue);
    display: block;
    margin-top: 1rem;
    // box-shadow: 5px 2px 5px grey;
    border: 1px solid rgb(230, 230, 230);
  }
  .comments-container {
  }
  .comment-icon-close {
    margin-top: 0.4rem;
    margin-bottom: 1rem;
    margin-left: 0.8rem;
  }
  .comment-icon-close:hover {
    cursor: pointer;
  }
  .icon {
    color: rgb(80, 80, 80);
    color: var(--med-font-blue);
  }
  .icon:hover {
    cursor: pointer;
  }
  .icon-heart-fill {
    color: var(--test-red);
  }
  .icon-heart-container {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  .icon-send {
    // color: white;
  }
  .post-comment-body {
    // width: 20vw;
    border-top: 1px solid rgb(240, 240, 240);
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .post-comment-body-pic {
    // width: 20vw;
    width: 80vw;
  }
  .post-comment-date {
    font-size: 0.2rem;
    color: rgb(100, 100, 100);
    background: rgb(240, 240, 240);
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
  }
  .post-comment-heading {
    // width: 30vw;
    // margin-left: 1rem;
    padding-bottom: 0.3rem;
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }
  .post-comment-heading-pic {
    height: 20px;
    width: 20px;
    border-radius: 2rem;
  }
  .post-comment-name {
    font-weight: bold;
    font-size: 0.3rem;
    line-height: 0.6rem;
  }
  .post-comment-preview {
    width: min-content;
    margin-left: 1rem;
    padding: 0.6rem 0.6rem;
    border: 1px solid rgb(240, 240, 240);
    border: 2px solid rgb(220, 220, 220);
  }
  .post-comment-row {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
    position: fixed;
    height: 100%;
    width: 100vw;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 8;
    background: rgb(252, 252, 252);
  }
  .post-comment-text {
    font-size: 0.3rem;
    padding: 0.2rem 0;
  }
  .post-body-pic {
    width: 100%;
  }
  .post-comments-button:hover {
    cursor: pointer;
  }
  .post-date {
    font-size: 0.6rem;
    color: rgb(100, 100, 100);
    background: rgb(240, 240, 240);
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
    letter-spacing: 0;
  }
  .post-heading {
    display: flex;
    gap: 0.4rem;
    padding: 1rem 0.6rem;
    padding-bottom: 0.4rem;
    // border-bottom: 1px solid rgb(244, 244, 244);
  }
  .post-heading-pic {
    height: 40px;
    width: 40px;
    border-radius: 2rem;
  }
  .post-image {
    display: grid;
    place-items: center;
  }
  .post-info {
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post-likes {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.8rem;
  }
  .post-main {
    background: white;
    color: rgb(60, 60, 60);
    width: 100vw;
    // padding: 1.2rem;
    padding-top: 0.4rem;
    box-sizing: border-box;
  }
  .post-name {
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1.4rem;
    letter-spacing: 0.02rem;
  }
  .post-options {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--test-blue);
    padding: 0 1rem;
  }
  .post-text {
    font-size: 0.8rem;
    padding: 1rem;
    letter-spacing: 0.02rem;
    // padding: 2rem 0;
  }
  .post-textarea {
    width: 100%;
    border: none;
    padding: 0 1rem;
    // padding: 0;
    resize: none;
    outline: none;
    font-size: 16px;
    display: block;
    margin-top: 1rem;
    // margin-top: 6rem;
    background: none;
    // margin-bottom: 100%;
    box-sizing: border-box;
    background: rgb(244, 244, 244);
    background: white;
    border-radius: 2.6rem;
    box-sizing: border-box;
    padding: 1.6rem;
    height: 6.2rem;
  }
  .show-comments {
    text-align: center;
    font-size: 0.8rem;
    color: rgb(160, 160, 160);
    padding-bottom: 0.4rem;
  }
  .show-comments:hover {
    cursor: pointer;
  }
  .hidden {
    display: none;
  }

  @media (max-width: 400px) {
    // .focused {
    //   width: 20vw;
    // }
    // .post-comment-body-pic {
    //   width: 20vw;
    // }
    .post-textarea-focused {
      // margin-top: 1rem;
    }
  }
`;

export default Wrapper;
