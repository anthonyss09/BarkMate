import styled from "styled-components";

const Wrapper = styled.div`
  .arrow-icon {
    margin-top: 0.4rem;
    margin-left: -0.6rem;
  }
  .event {
    // color: var(--test-red);
    color: var(--federal-blue);
    font-size: 0.8rem;
    margin-left: 1rem;
  }
  .event-date {
    // color: rgb(100, 100, 100);
    font-weight: bold;
  }
  .event-list {
    // border: 2px solid black;
    padding: 0 2rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    gap: 1rem;
    // margin: 1rem 2rem;
  }
  .no-events {
    display: grid;
    place-items: center;
    font-weight: bold;
    letter-spacing: 0.02rem;
    text-align: center;
    color: rgb(80, 80, 80);
    padding: 0 2rem;
    box-sizing: border-box;
  }
  .event-note {
    margin-left: 0.6rem;
    // margin-left: 2rem;
    color: rgb(60, 60, 60);
    color: var(--bark-pink);
    color: var(--test-red);
    font-weight: bold;
    letter-spacing: 0.03rem;
  }
  .events-row-header {
    min-height: 15vw;
    font-weight: bold;
    color: var(--federal-blue);
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .events-row-header:hover {
    cursor: pointer;
  }
  .events-row-main {
    background: var(--grey-248);
    margin: 0 1rem;
    border-radius: 2rem;
    padding: 0 1rem;
  }
  .event-time {
    font-weight: bold;
  }
  .number-circle {
    color: var(--test-red);
    height: 1.6rem;
    width: 1.6rem;
    display: grid;
    place-items: center;
    border-radius: 2rem;
    font-size: 1.2rem;
  }
`;
export default Wrapper;
