import styled from "styled-components";

const Wrapper = styled.aside`
  .btn-create-post {
    background: var(--med-bright-blue);
    color: white;
    font-size: 1rem;
  }
  .create-post-heading {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.6rem;
  }
  .create-post-input {
    display: none;
  }
  .create-post-label-image {
    border-radius: 1.5rem;
    height: 2rem;
    border: 2px solid var(--grey-240);
    // padding-left: 0.8rem;
    background: none;
    /* font-size: 16px; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem;
  }
  .create-post-label-image:hover {
    cursor: pointer;
  }
  .create-post-main {
    // height: 100vh;
    width: 100vw;
    // position: absolute;
    background: white;
    top: 8.2rem;
    left: 0;
    z-index: 4;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .create-post-name {
    font-weight: bold;
    font-size: 0.8rem;
  }
  .create-post-pic {
    height: 60px;
    width: 60px;
    border-radius: 3rem;
  }
  .create-post-textarea {
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.6rem;
    box-sizing: border-box;
    // border: 2px solid var(--grey-240);
    border: none;
    border-radius: 1rem;
    resize: none;
    outline: none;
    font-size: 16px;
  }
  .icon-close:hover {
    cursor: pointer;
  }
  .icon-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.4rem;
  }
  .post-image {
    height: 200px;
    margin-bottom: 1rem;
  }
  .post-image-row {
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
