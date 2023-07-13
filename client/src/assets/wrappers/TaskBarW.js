import styled from "styled-components";

const Wrapper = styled.section`
  .task-bar-center {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .task-bar-main {
    height: 3.6rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 4rem;
    background: white;
    background: var(--test-blue);
    padding-top: 0.6rem;
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
    border-radius: 1rem;
    background: white;
    padding: 0.4rem 6vw;
  }
  .task.active {
    padding: 0.4rem 6vw;
    border: 1px solid var(--grey-240);
    box-shadow: 5px 2px 5px var(--grey-220);
    box-shadow: 5px 2px 5px grey;
  }
`;

export default Wrapper;
