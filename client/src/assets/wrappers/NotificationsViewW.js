import styled from "styled-components";

const Wrapper = styled.aside`
  .notification-image {
    width: 30px;
    height: 30px;
    border-radius: 3rem;
  }
  .notification-sender {
    font-weight: bold;
    margin-left: 0.4rem;
  }
  .notifications-view-header {
    font-size: 1rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.2rem 0.2rem;
    background: rgb(244, 244, 244);
    background: var(--test-blue);
    letter-spacing: 0.15rem;
  }
  .notifications-view-icon-close {
    color: rgb(100, 100, 100);
    margin: 0.2rem 0 0 0.2rem;
    margin: 0.4rem;
  }
  .notifications-view-icon-close:hover {
    cursor: pointer;
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
    box-shadow: -2px 0px 8px 1px rgb(60, 60, 60);
  }
  .notification-view-single {
    height: 4.2rem;
    // border: 1px solid grey;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.2rem;
    // padding: 0.4rem;
    padding-left: 0.4rem;
    background: var(--test-blue);
    background: rgb(244, 244, 244);

    // margin: 0.2rem 0.4rem;
    // margin: 0.2rem 0;
    // border-radius: 1rem;
    margin: 0 0.2rem;
  }
  .notification-viewed {
    background: white;
  }
`;

export default Wrapper;
