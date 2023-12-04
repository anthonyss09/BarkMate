import styled from "styled-components";

const Wrapper = styled.aside`
  .comments-container {
    margin: 0 1rem;
  }
  .comment-icon-close:hover {
    cursor: pointer;
  }
  .icon {
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
    padding-bottom: 0.2rem;
    margin: 0 0.6rem;
  }
  .post-text {
    font-size: 0.8rem;
    padding: 1rem;
    letter-spacing: 0.02rem;
    letter-spacing: 0.03rem;
    margin-left: 1rem;
    line-height: 1.1rem;
    width: 80%;
    margin-bottom: 0.6rem;
  }
  .post-textarea {
    border: none;
    padding: 0 1rem;
    resize: none;
    outline: none;
    font-size: 16px;
    background: none;
    width: 70%;
    background: rgb(244, 244, 244);
    border-radius: 2rem;
    padding: 0.8rem;
    height: 2.8rem;
    box-sizing: border-box;
    font-family: "Signika Negative", sans-serif;
    letter-spacing: 0.02rem;
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
  }
`;

export default Wrapper;
