import styled from "styled-components";

const Wrapper = styled.section`
  .task-arrow-right:hover {
  }
  .task-bar-center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .task-bar-main {
    width: 94%;
    height: 3.6rem;
    display: flex;
    align-items: center;
    // top: 4rem;
    background: white;
    padding: 0.3rem 0;
    z-index: 2;
    margin-left: 0.6rem;
    margin-bottom: 0.6rem;
    border-radius: 3rem;
    box-shadow: 5px 2px 5px grey;
    box-sizing: border-box;
    transition: all 0.2s ease-in;
    border: 1px solid var(--test-blue);
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
  }
  .task {
    height: 2rem;
    border-radius: 3rem;
    display: grid;
    place-items: center;
    background: none;
  }
  .task.active {
    background: white;
    transform: scale(1.3);
    background: none;
  }
  .dropped {
    position: fixed;
    top: 80vh;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    border-radius: 3rem;
  }
  .collapsed {
    position: fixed;
    width: 4rem;
    height: 4rem;
    overflow: hidden;
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
