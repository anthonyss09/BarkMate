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
    // color: var(--federal-blue);
    color: var(--charcoal);
    font-weight: 600;
    background: rgb(248, 248, 248, 0.8);
    box-shadow: 3px 0.5px 6px rgb(180, 180, 180);
  }
  .btn-login:hover {
    // background: var(--space-cadet);
    // background: var(--med-bright-blue);
    // color: white;
    // background: var(--bark-pink);
    transition: all 0.3s ease;
    transform: scale(1.1);
    // border: 1px solid rgb(230, 230, 230);
  }
  .icon-user {
    color: var(--space-cadet);
    margin-right: 1rem;
  }
  .icon-user:hover {
    cursor: pointer;
  }
  .icon-notification {
    color: var(--space-cadet);
  }
  .icon:hover {
    cursor: pointer;
  }
  .logo {
    // color: var(--space-cadet);
    // font-size: 1.7rem;
    // letter-spacing: 0.08rem;
    // letter-spacing: 0.1rem;
    margin-left: 2rem;
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
    // margin-bottom: 0.4rem;
  }
  .nav-main-landing {
    border: none;
    z-index: 20;
    // opacity: 0.95;
    border-bottom: 2px solid rgb(240, 240, 240);
  }
  .nav-profile-pic {
    height: 35px;
    width: 35px;
    border-radius: 5rem;
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
