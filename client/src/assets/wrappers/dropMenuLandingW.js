import styled from "styled-components";

const Wrapper = styled.div`
  .drop-menu-landing-main {
    width: 100vw;
    // height: 70vh;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 23;
    background: rgb(252, 252, 252, 0.95);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    padding: 2rem;
    padding-top: 4rem;
    gap: 2rem;
    box-sizing: border-box;
    box-shadow: var(--shadow-main-light);
  }

  .link {
    letter-spacing: 0.03rem;
    letter-spacing: 0.08rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    color: var(--med-bright-blue);
    color: var(--federal-blue);
    font-size: 1.1rem;
    color: var(--charcoal);
    // color: black;
  }

  .link:hover {
    transform: var(--transform-main-scale);
    transition: var(--transition-main);
    padding-left: 2rem;
  }
`;

export default Wrapper;
