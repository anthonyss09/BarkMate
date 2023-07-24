import styled from "styled-components";

const Wrapper = styled.section`
  .task-arrow-right:hover {
    // box-shadow: 5px 2px 5px rgb(80, 80, 80);
  }
  .task-bar-center {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // background: rgb(244, 244, 244);
    // padding: 1rem;
    width: 100vw;
  }
  .task-bar-main {
    width: 96%;
    height: 3.6rem;
    // height: 4rem;
    display: flex;
    align-items: center;
    // position: fixed;
    top: 4rem;
    background: white;
    // background: var(--test-blue);
    // background: rgb(246, 246, 246);
    // background: white;
    // padding-top: 0.6rem;
    padding: 0.3rem 0;
    z-index: 2;
    // border: 1px solid rgb(80, 80, 80);
    box-sizing: border-box;
    margin-left: 0.6rem;
    // box-shadow: 5px 2px 5px rgb(80, 80, 80);
    border-radius: 3rem;
    box-shadow: 5px 2px 5px grey;
    margin-bottom: 0.6rem;
    transition: all 0.2s ease-in;
    border: 1px solid rgb(244, 244, 244);
    border: 1px solid var(--test-blue);
    // width: 100%;
    // margin: 0;
    // border-radius: 0;
  }
  .task-calendar {
    color: var(--test-red);
  }
  .task-chats {
    color: var(--med-bright-blue);
  }
  .task-home {
    color: var(--federal-blue);
  }
  .task-groups {
    color: var(--med-bright-green);
  }
  .task-profiles {
    color: var(--med-bright-blue);
    // color: var(--med-bright-green);
  }
  .task {
    height: 2rem;
    // padding: 0 4vw;
    border-radius: 3rem;
    display: grid;
    place-items: center;
    // border: 1px solid rgb(230, 230, 230);
    background: white;
    // padding: 0.4rem 6vw;
    // background: var(--test-blue);
  }
  .task.active {
    // padding: 0.4rem 6vw;
    background: white;
    // border: 1px solid var(--grey-240);
    // box-shadow: 5px 2px 5px var(--grey-220);
    // box-shadow: 5px 2px 5px grey;
    transform: scale(1.3);
  }
  // .task-container {
  //   background: rgb(244, 244, 244);
  //   padding: 0.8rem 1rem;
  //   border-radius: 5rem;
  // }

  .dropped {
    position: fixed;
    top: 13rem;
    left: 0.6rem;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    width: 94%;
    border-radius: 3rem;
  }
  .collapsed {
    position: fixed;
    width: 4rem;
    height: 4rem;
    // width: min-content;
    overflow: hidden;
    // border: none;
    // padding-left: 1%;
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border-radius: 3rem;
  }
  .collapsed:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default Wrapper;
