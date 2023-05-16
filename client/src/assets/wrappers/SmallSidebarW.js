import styled from "styled-components";

const Wrapper = styled.aside`
  .icon-friends {
    color: var(--test-red);
  }
  .link {
    width: 90%;
    height: 2rem;
    border-bottom: 1px solid rgb(230, 230, 230);
    text-align: center;
    font-size: 0.8rem;
    color: rgb(40, 40, 40);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    font-weight: 500;
    font-family: "Ubuntu", sans-serif;
  }
  .last-link {
    border: none;
  }
  .small-sidebar-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .small-sidebar-main {
    width: 22vw;
    min-width: 100px;
    height: 16vh;
    display: flex;
    align-items: center;
    position: absolute;
    top: 3.2rem;
    right: 1rem;
    background: white;
    z-index: 3;
    border: 1px solid rgb(230, 230, 230);
    box-shadow: 2px 2px 5px rgb(230, 230, 230);
  }
`;

export default Wrapper;
