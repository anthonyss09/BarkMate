import styled from "styled-components";

const Wrapper = styled.section`
  .dash-profile-pic {
    height: 40px;
    width: 40px;
    border-radius: 2rem;
  }
  .filter {
    // text-align: center;
    font-size: 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid rgb(230, 230, 230);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    color: rgb(20, 20, 20);
    align-self: flex-start;
    padding: 0.5rem 0.8rem;
    // color: rgb(100, 100, 100);
    margin: 0.6rem 1.7rem;
    margin-right: 0;
    position: relative;
  }
  .active {
    border: 2px solid var(--grey-248);
    box-shadow: 5px 2px 5px var(--grey-220);
  }
  .header-buttons {
    display: flex;
  }
  .profiles-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.6rem;
    // padding-bottom: 2rem;
    gap: 2rem;
    background: rgb(244, 244, 244);
    // background: var(--bark-pink);
    // background: var(--test-blue);
  }
  .p-top {
    color: rgb(140, 140, 140);
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 1rem;
    padding-left: 1.8rem;
    margin-bottom: 0.4rem;
    color: var(--federal-blue);
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
    border-top: 1rem solid rgb(244, 244, 244);
    // border-top: 1rem solid var(--bark-pink);
    gap: 1rem;
    background: rgb(244, 244, 244);
    // background: var(--bark-pink);
    // padding-bottom: 2rem;
  }
`;

export default Wrapper;
