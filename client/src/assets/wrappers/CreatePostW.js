import styled from "styled-components";

const Wrapper = styled.aside`
  .beat-loader {
    position: fixed;
    top: 10vh;
    left: 40vw;
    z-index: 30;
  }
  .btn-create-post {
    background: var(--med-bright-blue);
    color: white;
    font-size: 1rem;
    width: 100%;
    margin-top: 0.8rem;
    box-shadow: 5px 2px 5px grey;
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
    height: 2rem;
    border: 1px solid var(--grey-240);
    border-radius: 1.5rem;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem;
    box-shadow: 5px 2px 5px grey;
  }
  .create-post-label-image:hover {
    cursor: pointer;
  }
  .create-post-main {
    height: 100%;
    width: 100vw;
    position: fixed;
    background: white;
    top: 0;
    right: 0;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    z-index: 22;
    transition: all 0.1s ease;
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
    border: none;
    border-radius: 1rem;
    resize: none;
    outline: none;
    font-size: 16px;
    background: none;
    font-family: "Signika Negative", sans-serif;
    letter-spacing: 0.02rem;
  }
  .icon-close:hover {
    cursor: pointer;
    transition: var(--transition-main);
    transform: var(--transform-main-scale);
  }
  .icon-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.4rem;
    width: min-content;
    padding-left: 1rem;
    margin-left: auto;
    z-index: 10;
  }
  .post-image {
    height: 200px;
    margin-bottom: 1rem;
  }
  .post-image-row {
    margin-top: auto;
  }
  .no-scroll {
    overflow: hidden;
  }
  .collapsed {
    height: 0;
    overflow: hidden;
    padding: 0;
  }

  @media (max-width: 400px) {
    .create-post-main {
      bottom: 0;
    }
    .focused {
      margin-top: -1rem;
    }
    .collapsed {
      height: 0;
      overflow: hidden;
      padding: 0;
    }
  }
`;

export default Wrapper;
