import styled from "styled-components";
import meshGradient from "../images/mesh-gradient.png";

const Wrapper = styled.nav`
  .bars {
    margin-left: 1rem;
    color: rgb(120, 120, 120);
  }
  .bone {
    color: var(--space-cadet);
  }
  .btn-login {
    margin-right: 1rem;
    padding: 0.4rem 1rem;
    border: none;
    color: var(--federal-blue);
    font-weight: 600;
  }
  .btn-login:hover {
    background: var(--space-cadet);
    color: white;
  }

  .icon-user {
    color: var(--space-cadet);
    margin-right: 1rem;
  }
  .icon-notification {
    color: var(--space-cadet);
  }
  .icon:hover {
    cursor: pointer;
  }
  .logo {
    color: var(--space-cadet);
    font-size: 1.6rem;
    font-size: 1.7rem;
    letter-spacing: 0.08rem;
    // color: var(--federal-blue);
  }
  .nav-icons-container {
    display: flex;
    gap: 0.6rem;
    position: relative;
  }
  .nav-main {
    height: 4rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    position: fixed;
    // left: 0;
    z-index: 3;
    // border-bottom: 1.5px solid var(--test-blue);
    // border-bottom: 1.5px solid rgb(240, 240, 240);
    // border-bottom: 8px solid rgb(210, 210, 210);
  }
  .nav-main-landing {
    border: none;
    opacity: 0.95;
  }
  .notification-count {
    height: 1rem;
    width: 1rem;
    font-size: 0.6rem;
    font-weight: bold;
    position: absolute;
    top: -0.4rem;
    left: 0.6rem;
    display: grid;
    place-items: center;
    background: var(--test-red);
    color: var(--test-blue);
    border-radius: 1rem;
  }
  .notification-count:hover {
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
`;

export default Wrapper;
