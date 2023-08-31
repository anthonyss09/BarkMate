import styled from "styled-components";

const Wrapper = styled.main`
  .add-event {
    width: 2.4rem;
    height: 2.4rem;
    margin: 1rem 0 0 2rem;
    border-radius: 2rem;
    background: var(--test-blue);
    display: grid;
    place-items: center;
    background: var(--med-bright-blue);
    color: white;
  }
  .add-line {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .add-line:hover {
    cursor: pointer;
  }
  .add-span {
    margin-top: 1rem;
    font-weight: bold;
    color: var(--med-bright-blue);
  }
  .arrow-icon {
    margin-top: 0.4rem;
    margin-left: -0.6rem;
  }
  .dash-cal-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
  }
  .events {
    min-height: 15vw;
    background: var(--grey-248);
    margin: 0 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-weight: bold;
    color: var(--federal-blue); 
    display: flex;
    align-items: center;
    gap: 1rem;
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
