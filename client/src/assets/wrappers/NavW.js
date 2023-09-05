import styled from "styled-components";
import meshGradient from "../images/mesh-gradient.png";

const Wrapper = styled.nav`
  .bars {
    margin-left: 1rem;
    color: rgb(120, 120, 120);
  }
  .bars:hover {
    cursor: pointer;
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
    font-size: 1.7rem;
    letter-spacing: 0.08rem;
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
    z-index: 7;
    border-bottom: 1px solid rgb(244, 244, 244);
    margin-bottom: 0.4rem;
  }
  .nav-main-landing {
    border: none;
    opacity: 0.95;
  }
  .nav-profile-pic {
    height: 30px;
    width: 30px;
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
