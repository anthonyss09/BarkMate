import styled from "styled-components";

const Wrapper = styled.aside`
  .big-sidebar-center {
    display: flex;
    flex-direction: column;
  }
  .big-sidebar-main {
    width: 50vw;
    height: 100vh;
    background: white;
    position: absolute;
    top: 4.05rem;
    // top: 0;
    left: 0;
    border-top: 1px solid rgb(240, 240, 240);
    box-shadow: 2px 2px 5px var(--grey-220);
    z-index: 4;
    font-family: "Ubuntu", sans-serif;
  }
  .icon-book {
    color: var(--federal-blue);
  }
  .icon-calender {
    color: var(--test-red);
  }
  .icon-chat {
    color: var(--med-bright-blue);
  }
  .icon-close {
    align-self: flex-end;
    margin-top: 0.6rem;
    margin-right: 0.6rem;
    margin-bottom: 0.2rem;
    position: absolute;
  }
  .icon-download {
    color: black;
    // color: var(--test-red);
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
    color: var(--sunglow);
  }
  .link {
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-weight: 500;
    color: rgb(40, 40, 40);
  }
  .links-container-big {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
  .links-container-small {
    width: 70%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link-big {
    width: 100%;
    height: 2.8rem;
    box-shadow: 1px 1px 3px rgb(244, 244, 244);
    color: rgb(80, 80, 80);
  }
  .link-download {
    color: var(--med-bright-blue);
  }
  .link-small {
    height: 2.8rem;
    font-size: 0.8rem;
    font-weight: bold;
    font-weight: 500;
    color: rgb(60, 60, 60);
    box-shadow: 1px 1px 3px rgb(244, 244, 244);
    border-left: 1px solid rgb(244, 244, 244);
  }

  @media (max-width: 400px) {
    .links-container-big {
      margin-top: 1.4rem;
    }
  }
`;

export default Wrapper;
