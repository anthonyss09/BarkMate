import styled from "styled-components";

const Wrapper = styled.aside`
  .btn-send {
    border-radius: 5rem;
    height: 4rem;
    background: var(--test-blue);
    margin-top: -0.6rem;
  }

  .icon {
    color: rgb(80, 80, 80);
  }
  .icon:hover {
    cursor: pointer;
  }
  .icon-heart-fill {
    color: var(--med-red);
  }
  .icon-heart-container {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  .icon-send {
    // color: var(--med-bright-blue);
  }
  .post-comment-row {
    display: flex;
    padding: 1rem;
    margin: 0 0.6rem;
    border: 1px solid var(--grey-220);
    border-radius: 1.5rem;
    margin-top: 0.6rem;
  }
  .post-body-pic {
    // width: 100%;
    // height: 45vh;
    // width: 80%;
    max-width: 90vw;
  }
  // .post-image {
  //   width: 100%;
  //   background: black;
  //   padding: 1rem;
  //   box-sizing: border-box;
  // }
  .post-comments-button:hover {
    cursor: pointer;
  }
  .post-heading {
    padding: 1rem;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
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
    border-bottom: 1px solid rgb(240, 240, 240);
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
    padding-bottom: 1rem;
    // padding: 1rem;
    // width: 90vw;
    // margin: 0 8px;
    // box-sizing: border-box;
    width: 97vw;
  }
  .post-name {
    font-weight: bold;
    font-size: 0.8rem;
  }
  .post-options {
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  .post-text {
    font-size: 0.8rem;
    padding: 1rem;
  }
  .post-textarea {
    width: 100%;
    border: none;
    padding: 0 1rem;
    resize: none;
    outline: none;
    font-size: 16px;
  }
  .show-comments {
    text-align: center;
    font-size: 0.8rem;
    // border: 1px solid var(--grey-220);
    // padding: 0.4rem;
    // border-radius: 1rem;
    // width: 40vw;
    // margin: 0 auto;
    color: rgb(160, 160, 160);
  }
  .show-comments:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
