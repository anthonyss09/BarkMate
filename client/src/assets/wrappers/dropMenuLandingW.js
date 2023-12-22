import styled from "styled-components";

const Wrapper = styled.aside`
  .drop-menu-landing-main {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 23;
    background: rgb(252, 252, 252, 0.97);
    background: white;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-top: 4rem;
    gap: 2rem;
    box-sizing: border-box;
    box-shadow: var(--shadow-main-light);
  }

  .icon-close:hover {
    cursor: pointer;
    transform: var(--transform-main-scale);
    transition: var(--transition-main);
  }

  .link {
    height: 2.8rem;
    letter-spacing: 0.08rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    // color: var(--charcoal);
    color: var(--federal-blue);
    width: min-content;
    // padding: 0.4rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    // border: 1px solid rgb(220, 220, 220);
    // background: rgb(252, 252, 252, 0.8);
    border-radius: 2rem;
    // box-shadow: 5px 2px 5px rgb(80, 80, 80);
    // background: white;
    letter-spacing: 0.06rem;
  }

  .link:hover {
    transform: var(--transform-main-scale);
    transition: var(--transition-main);
    padding-left: 2rem;
  }
  .llc {
    margin-top: 4rem;
    color: var(--bark-pink);
    color: rgb(160, 160, 160);
  }
  .llc-link {
    color: var(--med-bright-blue);
    color: var(--llc-blue);
    font-size: 0.8rem;
    letter-spacing: 0;
  }
`;

export default Wrapper;
