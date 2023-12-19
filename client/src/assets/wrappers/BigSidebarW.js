import styled from "styled-components";

const Wrapper = styled.aside`
  .big-sidebar-center {
    display: flex;
    flex-direction: column;
  }
  .big-sidebar-main {
    width: 100vw;
    height: 100vh;
    background: rgb(252, 252, 252, 0.96);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    border-right: 1px solid rgb(244, 244, 244);
    z-index: 4;
    font-family: "Ubuntu", sans-serif;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    transition: all 0.5s ease;
    // background: white;
  }
  .icon-book {
    color: var(--space-cadet);
  }
  .icon-calender {
    color: var(--test-red);
  }
  .icon-chat {
    color: var(--med-bright-blue);
  }
  .icon-close {
    color: black;
    align-self: flex-start;
    position: absolute;
    top: 2rem;
    left: 2rem;
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
    background: rgb(252, 252, 252, 0.97);
    background: none;
    border-radius: 2rem;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    // box-shadow: var(--shadow-main-light);
    background: white;
    height: 2.8rem;
    letter-spacing: 0.06rem;
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
    padding: 2rem;
    padding-top: 3rem;
    gap: 2rem;
  }
  .links-container-small {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link-big {
    height: 2.8rem;
    // background: white;
  }
  .link-download {
  }
  .link-small {
    height: 2.8rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .llc {
    text-align: center;
    color: var(--bark-pink);
    font-size: 0.6rem;
  }
  .llc-link {
    font-size: 0.6rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--llc-blue);
  }
`;

export default Wrapper;
