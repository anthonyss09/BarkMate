import styled from "styled-components";

const Wrapper = styled.section`
  .beat-loader {
    align-self: center;
  }
  .dash-center {
    padding: 0;
  }
  .dash-profile-pic {
    height: 40px;
    width: 40px;
    border-radius: 2rem;
  }
  .active {
    border: 2px solid var(--grey-248);
    box-shadow: 5px 2px 5px var(--grey-220);
  }
  .header-buttons {
    display: flex;
  }
  .no-matches {
    padding: 4rem;
    font-weight: bold;
    color: rgb(60, 60, 60);
    background: white;
  }
  .profiles-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding-top: 0.6rem;
    // padding-bottom: 2rem;
    gap: 2rem;
    background: rgb(244, 244, 244);
    padding-top: 8px;
    // background: var(--bark-pink);
    // background: var(--test-blue);
  }
  .p-top {
    color: rgb(170, 170, 167);
    font-size: 0.8rem;
    // font-weight: bold;
    border-radius: 1rem;
    padding-left: 1.8rem;
    margin-bottom: 0.4rem;
    // color: var(--federal-blue);
    // color: rgb(80, 80, 80);
    // color: rgb(140, 140, 140);
    // color: black;
    letter-spacing: 0.02rem;
    // margin-left: -18rem;
    margin-left: -6rem;
  }
  .create-post-container {
    // width: 100vw;
    // position: fixed;
    top: 8.2rem;
    left: 0.6rem;
    left: 0.8rem;
    display: flex;
    justify-content: center;
    background: white;
    // border: 1px solid rgb(100, 100, 100);
    // position: -webkit-sticky; /* Safari & IE */
    position: absolute;
    top: 9.4rem;
    // top: 12rem;
    // min-width: 6.5rem;
    // width: 20vw;
    height: 3rem;
    width: 3rem;
    overflow: hidden;
    border-radius: 5rem;
    z-index: 6;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    transition: all 0.2s ease-in;
    border-top: 1px solid rgb(244, 244, 244);
  }
  .create-post-container:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .create-post {
    width: 100%;
    // height: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1.4rem;
    // margin-top: 0.6rem;
    border: 1px solid rgb(244, 244, 244);
    // padding: 0.6rem 4rem;
    // background: rgb(244, 244, 244);
  }
  .icon-add {
    color: var(--test-blue);
    color: white;
    color: var(--med-bright-blue);
  }
  .post-p {
    color: rgb(140, 140, 140);
    color: rgb(180, 180, 180);
    letter-spacing: 0.04vw;
    font-size: 1.05rem;
  }
  .posts-container {
    width: 100vw;
    // margin-top: 3.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 8px solid rgb(244, 244, 244);
    gap: 8px;
    background: rgb(244, 244, 244);
    // background: var(--test-blue);
  }
  .scrolled {
    // top: 40vh;
    // left: 84vw;
    position: sticky;
  }
`;

export default Wrapper;
