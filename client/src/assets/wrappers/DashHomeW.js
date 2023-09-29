import styled from "styled-components";

const Wrapper = styled.section`
  .active {
    border: 2px solid var(--grey-248);
    box-shadow: 5px 2px 5px var(--grey-220);
  }
  .beat-loader {
    position: fixed;
    left: 40vw;
    top: 30vh;
    z-index: 30;
  }
  .create-post-container {
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    background: white;
    position: absolute;
    top: 9.4rem;
    top: 5rem;
    right: 1rem;
    right: 1.6rem;
    overflow: hidden;
    border-radius: 5rem;
    z-index: 6;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    transition: all 0.2s ease-in;
    border: 1px solid var(--test-blue);
  }
  .create-post-container:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .create-post {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1.4rem;
    border: 1px solid rgb(244, 244, 244);
  }
  .dash-center {
    padding: 0;
  }
  .dash-profile-pic {
    height: 40px;
    width: 40px;
    border-radius: 2rem;
  }
  .header-buttons {
    display: flex;
  }
  .icon-add {
    color: var(--med-bright-blue);
  }
  .p-top {
    color: rgb(170, 170, 167);
    font-size: 0.8rem;
    border-radius: 1rem;
    padding-left: 1.8rem;
    margin-bottom: 0.4rem;
    letter-spacing: 0.02rem;
    margin-left: -6rem;
  }
  .post-p {
    color: rgb(180, 180, 180);
    letter-spacing: 0.04vw;
    font-size: 1.05rem;
  }
  .posts-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 8px solid rgb(220, 220, 220);
    // border-top: 8px solid rgb(244, 244, 244);
    gap: 8px;
    background: rgb(220, 220, 220);
    // background: rgb(244, 244, 244);
  }
  .profiles-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: rgb(220, 220, 220);
    // background: rgb(244, 244, 244);
    border-top: 8px solid rgb(244, 244, 244);
    border-top: 8px solid rgb(220, 220, 220);
  }
  .background-white {
    background: white;
  }
  .scrolled {
    position: fixed;
    top: 72vh;
    right: 100vw;
    left: 0.8rem;
  }
`;

export default Wrapper;
