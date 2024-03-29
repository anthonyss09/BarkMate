import styled from "styled-components";

const Wrapper = styled.aside`
  width: 100%;
  max-width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
  background: white;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  border-left: 1px solid rgb(220, 220, 220);
  box-shadow: -1px 2px 100vw grey;
  background: white;
  overflow-y: scroll;
  box-sizing: border-box;
  .friends-title {
    font-size: 1.4rem;
    margin: 0 auto;
  }
  h3 {
    background: var(--test-blue);
    letter-spacing: 0.15rem;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    border: 1px solid rgb(240, 240, 240);
  }
  .friend-accept {
    color: var(--med-bright-blue);
    margin-right: 0.2rem;
  }
  .friend-accept:hover {
    cursor: pointer;
  }
  .friend-ignore {
    color: var(--med-font-blue);
    margin-right: 0.4rem;
  }
  .friend-ignore:hover {
    cursor: pointer;
  }
  .friend-image {
    width: 30px;
    height: 30px;
    border-radius: 3rem;
  }
  .friend-name {
    font-weight: bold;
    margin-left: 0.4rem;
    margin-right: auto;
  }
  .friend-pending {
    color: var(--med-font-blue);
    font-style: italic;
    margin-right: 0.4rem;
  }
  .friend-list {
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .friend-list-header {
    width: min-content;
    padding: 0.5rem 0.7rem;
    border-radius: 2rem;
    letter-spacing: 0.05rem;
    color: rgb(60, 60, 60);
    margin-bottom: 1rem;
    background: white;
    font-family: "Roboto Condensed", sans-serif;
  }
  .friends-view-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
  .friends-view-header {
    font-size: 1rem;
    background: var(--test-blue);
    display: flex;
    align-items: center;
    padding: 1rem 0;
    font-family: "Roboto Condensed", sans-serif;
  }
  .friends-view-icon-close {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
  }
  .friends-view-icon-close:hover {
    cursor: pointer;
  }
  .friends-view-no-content {
    font-weight: bold;
    letter-spacing: 0.02rem;
    text-align: center;
    color: rgb(80, 80, 80);
    margin-bottom: 1rem;
  }
  .friends-view-main {
  }
  .friends-view-single {
    height: 3.6rem;
    display: flex;
    align-items: center;
    flex-wrap: no-wrap;
    gap: 0.2rem;
    background: white;
    padding-left: 0.8rem;
  }
  .notifications-view-icon-close {
    margin: 0.4rem;
    margin-top: -1rem;
  }
  .notifications-view-icon-close:hover {
    cursor: pointer;
  }
`;
export default Wrapper;
