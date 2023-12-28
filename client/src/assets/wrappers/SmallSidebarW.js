import styled from "styled-components";

const Wrapper = styled.aside`
  min-width: 100px;
  max-width: 200px;
  width: 50vw;
  height: 28vh;
  position: absolute;
  top: 3.2rem;
  right: 1rem;
  z-index: 3;
  border: 1px solid rgb(240, 240, 240);
  box-shadow: 5px 2px 5px grey;
  border-radius: 1.5rem;
  background: white;
  .icon-close {
    margin: 1rem;
    margin-bottom: 0.2rem;
  }
  .icon-close:hover {
    cursor: pointer;
  }
  .icon-friends {
    color: var(--med-bright-blue);
  }
  .icon-logout {
    color: var(--test-red);
  }
  .icon-user-circle {
    color: var(--space-cadet);
  }
  .link {
    width: 100%;
    height: 2rem;
    text-align: center;
    font-size: 0.8rem;
    color: rgb(40, 40, 40);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    font-weight: 500;
    font-family: "Ubuntu", sans-serif;
    letter-spacing: 0.03rem;
  }
  .link:hover {
    cursor: pointer;
  }
  .last-link {
    border: none;
    box-shadow: none;
  }
  .small-sidebar-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .small-sidebar-main {
  }
`;

export default Wrapper;
