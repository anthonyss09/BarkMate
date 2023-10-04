import styled from "styled-components";

const Wrapper = styled.aside`
  .big-sidebar-center {
    display: flex;
    flex-direction: column;
  }
  .big-sidebar-main {
    width: 100vw;
    height: 100vh;
    background: rgb(252, 252, 252, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid rgb(244, 244, 244);
    z-index: 4;
    font-family: "Ubuntu", sans-serif;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    transition: all 0.5s ease;
    overflow: hidden;
  }
  .icon-book {
    color: var(--federal-blue);
    color: var(--space-cadet);
    // color: var(--test-red);
  }
  .icon-calender {
    color: var(--test-red);
  }
  .icon-chat {
    color: var(--med-bright-blue);
  }
  .icon-close {
    margin: 0.6rem;
    margin-bottom: 1rem;
    margin-bottom: 3rem;
    color: black;
  }
  .icon-close:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
  .icon-download {
    color: var(--test-red);
  }
  .icon-groups {
    color: var(--med-bright-green);
  }
  .icon-home {
    color: var(--space-cadet);
  }
  .icon-profile {
    color: var(--med-bright-blue);
  }
  .icon-star {
    color: var(--federal-blue);
  }

  .link {
    width: min-content;
    padding: 0.4rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-weight: 500;
    border: 1px solid rgb(220, 220, 220);
    background: rgb(252, 252, 252, 0.8);
    border-radius: 2rem;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    height: 2.8rem;
    letter-spacing: 0.06rem;
    box-shadow: 3px 0.5px 6px rgb(180, 180, 180);
  }
  .link:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
  .links-container-big {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 4vh;
  }
  .links-container-small {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link-big {
    height: 2.8rem;
    background: white;
  }
  .link-download {
  }
  .link-small {
    height: 2.8rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export default Wrapper;
