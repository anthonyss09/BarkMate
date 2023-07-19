import styled from "styled-components";

const Wrapper = styled.section`
  .task-bar-center {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // background: rgb(244, 244, 244);
    // padding: 1rem;
    width: 100vw;
  }
  .task-bar-main {
    height: 3.6rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 4rem;
    background: white;
    background: var(--test-blue);
    // background: rgb(244, 244, 244);
    // background: white;
    // padding-top: 0.6rem;
    padding: 0.3rem 0;
    z-index: 2;
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
    height: 2.4rem;
    padding: 0 6vw;
    border-radius: 3rem;
    display: grid;
    place-items: center;

    background: white;
    // padding: 0.4rem 6vw;
    // background: var(--test-blue);
  }
  .task.active {
    // padding: 0.4rem 6vw;
    background: white;
    border: 1px solid var(--grey-240);
    box-shadow: 5px 2px 5px var(--grey-220);
    box-shadow: 5px 2px 5px grey;
  }
  // .task-container {
  //   background: rgb(244, 244, 244);
  //   padding: 0.8rem 1rem;
  //   border-radius: 5rem;
  // }
`;

export default Wrapper;
