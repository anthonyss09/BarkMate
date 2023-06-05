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
    // color: var(--federal-blue);
    color: var(--space-cadet);
    margin-right: 1rem;
  }
  .logo {
    color: var(--space-cadet);
    font-size: 1.6rem;
    // color: var(--federal-blue);
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
    border-bottom: 1.5px solid var(--test-blue);
  }
  .nav-main-landing {
    border: none;
    opacity: 0.95;
  }
  .hidden {
    display: none;
  }
`;

export default Wrapper;
