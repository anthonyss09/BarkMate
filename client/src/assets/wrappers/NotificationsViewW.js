import styled from "styled-components";

const Wrapper = styled.aside`
  h3 {
    height: min-content;
    padding: 0.8rem 1.2rem;
    border: 1px solid rgb(240, 240, 240);
    letter-spacing: 0.15rem;
  }
  .notification-image {
    width: 30px;
    height: 30px;
    border-radius: 3rem;
  }
  .notification-sender {
    font-weight: bold;
    margin-left: 0.4rem;
    margin-right: auto;
  }
  .notification-text {
    margin-right: 0.8rem;
    color: rgb(60, 60, 60);
    color: var(--med-font-blue);
  }
  .notifications-view-header {
    font-size: 1.3rem;
    // height: 4.2rem;
    background: var(--test-blue);
    letter-spacing: 0.15rem;
    // padding-bottom: 3rem;
    margin: 0;
    background: white;
    background: var(--test-blue);
    display: flex;
    height: 5rem;
    align-items: center;
    border-bottom: 2px solid white;
    font-family: "Roboto Condensed", sans-serif;
  }
  .notifications-view-icon-close {
    margin: 0.4rem;
    color: black;
    margin-top: -1rem;
  }
  .notifications-view-icon-close:hover {
    cursor: pointer;
  }
  .notifications-view-main {
    width: 100%;
    max-width: 320px;
    max-width: 300px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 4;
    overflow-y: scroll;
    background: white;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    border-left: 1px solid rgb(220, 220, 220);
    border-top: 1px solid rgb(220, 220, 220);
    // background: rgb(252, 252, 252, 0.9);
    box-shadow: -1px 2px 100vw grey;
  }
  .notification-view-single {
    height: 4.2rem;
    height: 5rem;
    height: 4.2rem;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    flex-wrap: no-wrap;
    gap: 0.2rem;
    // background: rgb(252, 252, 252);
    // background: rgb(225, 225, 225, 0.8);
    background: rgb(244, 244, 244);
    margin: 0;
    padding-left: 0.8rem;
  }
  .notification-viewed {
    // background: rgb(252, 252, 252, 0.8);
    background: white;
  }
`;

export default Wrapper;
