import styled from "styled-components";

const Wrapper = styled.section`
  .beat-loader {
    align-self: center;
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
    color: rgb(140, 140, 140);
    font-size: 0.8rem;
    // font-weight: bold;
    border-radius: 1rem;
    padding-left: 1.8rem;
    margin-bottom: 0.4rem;
    color: var(--federal-blue);
    color: rgb(80, 80, 80);
    // color: rgb(140, 140, 140);
    color: black;
    letter-spacing: 0.02rem;
  }
  .create-post-container {
    width: 100vw;
    position: fixed;
    top: 8.2rem;
    left: 0;
    display: flex;
    justify-content: center;
    background: white;
  }
  .create-post {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1rem;
  }
  .post-p {
    color: rgb(140, 140, 140);
  }
  .posts-container {
    width: 100vw;
    margin-top: 3.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 8px solid rgb(244, 244, 244);
    gap: 8px;
    background: rgb(244, 244, 244);
    // background: var(--test-blue);
  }
`;

export default Wrapper;
