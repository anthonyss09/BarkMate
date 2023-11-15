import styled from "styled-components";

const Wrapper = styled.aside`
  h3 {
    height: min-content;
    padding: 0.8rem 1.2rem;
    border: 1px solid rgb(240, 240, 240);
    letter-spacing: 0.02rem;
    margin: 0 auto;
  }
  .btn-more-notifications {
    width: 80%;
    margin: 1rem auto;
    background: white;
    border: 2px solid rgb(80, 80, 80);
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
    color: var(--med-font-blue);
  }
  .notifications-view-title {
    font-size: 1.3rem;
    margin: 0;
    background: var(--test-blue);
    display: flex;
    height: 5rem;
    align-items: center;
    color: rgb(30, 30, 30);
  }
  .notifications-view-header {
    margin-top: 2rem;
    padding: 0;
    padding-left: 1rem;
    margin-bottom: 1rem;
    border: none;
    width: 100%;
    box-sizing: border-box;
    color: rgb(80, 80, 80);
  }
  .notifications-view-icon-close {
    color: black;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
  }
  .notifications-view-icon-close:hover {
    cursor: pointer;
  }
  .notifications-view-no-content {
    font-weight: bold;
    letter-spacing: 0.02rem;
    text-align: center;
    color: rgb(80, 80, 80);
    margin: 1rem;
  }
  .notifications-view-main {
    width: 100%;
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
    box-shadow: -1px 2px 100vw grey;
  }
  .notification-view-single {
    height: 4.2rem;
    display: flex;
    align-items: center;
    flex-wrap: no-wrap;
    gap: 0.2rem;
    background: rgb(248, 248, 248);
    margin: 0;
    padding-left: 0.8rem;
  }
  .notification-viewed {
    background: white;
  }
`;

export default Wrapper;
