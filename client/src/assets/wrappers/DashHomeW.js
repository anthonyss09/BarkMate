import styled from "styled-components";

const Wrapper = styled.div`
  .active {
    border: 2px solid var(--grey-248);
    box-shadow: 5px 2px 5px var(--grey-220);
  }
  .btn {
    margin-top: 1rem;
    background: var(--med-bright-blue);
    color: white;
  }
  .create-post-container {
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    background: white;
    position: absolute;
    top: 1rem;
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
    // padding: 0.6rem 1.4rem;
    border: 1px solid rgb(244, 244, 244);
    background: white;
    color: black;
  }
  .dash-center {
    padding: 0;
    position: relative;
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
    // color: var(--med-bright-blue);
    color: var(--federal-blue);
  }
  .no-matches {
    padding: 2rem;
    letter-spacing: 0.05rem;
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
    gap: 8px;
    background: rgb(220, 220, 220);
  }
  .profiles-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: rgb(220, 220, 220);
    border-top: 8px solid rgb(244, 244, 244);
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
  @media (max-width: 400px) {
    .no-scroll {
      // position: fixed;
      // overflow: hidden;
    }
  }
`;

export default Wrapper;
