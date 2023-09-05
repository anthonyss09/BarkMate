import styled from "styled-components";

const Wrapper = styled.aside`
  .about-heading {
    padding: 0 0.2rem;
    font-size: 1.2rem;
    font-family: "Roboto Condensed", sans-serif;
  }
  .add-friend {
    color: var(--test-red);
    // position: absolute;
    // left: 2.2rem;
  }
  .icon-star {
    color: var(--federal-blue);
  }
  .location-container {
    background: white;
    padding: 0.1rem 0.3rem;
    color: black;
  }
  .location {
    font-size: 0.6rem;
    font-weight: bold;
    color: black;
    color: var(--med-font-blue);
  }
  .message {
    // position: absolute;
    // right: 2.2rem;
  }
  .message-friend {
    color: var(--med-bright-blue);
    color: var(--med-font-blue);
  }
  .option {
    // width: 8vw;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 2px solid rgb(230, 230, 230);
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
    margin-bottom: 0.6rem;
    z-index: 1;
  }
  .option:hover {
    cursor: pointer;
  }
  .profile-preview-about {
    max-width: 440px;
    // width: 90vw;
    box-sizing: border-box;
    // border-top: 1px solid rgb(244, 244, 244);
    background: white;
    // margin-top: 3.6rem;
  }
  .profile-preview-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // border-bottom: 1px solid var(--test-blue);
    padding: 0.6rem 0;
  }
  .profile-preview-center {
    width: 100%;
    max-width: 490px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    padding-top: 1rem;
    // border: 1px solid var(--test-blue);
    position: relative;
  }
  .profile-preview-header {
    width: 92vw;
    max-width: 400px;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    gap: 1rem;
    // padding-left: 1.6rem;
    margin: 0.2rem 0;
  }
  .profile-preview-main {
    width: 100vw;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    box-sizing: border-box;
    padding: 1rem;
    padding-top: 0;
  }
  .profile-preview-name {
    // text-align: center;
    font-size: 2rem;
    font-weight: 400;
    border-radius: 3rem;
    font-family: "Roboto Condensed", sans-serif;
    color: rgb(80, 80, 80);
  }
  .profile-preview-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    // justify-content: center;
    // margin-top: -3.6rem;
    // margin-bottom: 0.4rem;
    // border-bottom: 1px solid rgb(230, 230, 230);
  }
  .profile-preview-p {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.4rem 0.2rem;
    box-sizing: border-box;
    color: black;
  }
  .profile-preview-pic {
    width: 100vw;
    max-height: 420px;
    // max-height: 300px;
    // max-width: 460px;
    z-index: 5;
  }
  .profile-pic-container {
    overflow: hidden;
    margin-bottom: 0.4rem;
  }
  .profile-preview-verification {
    margin-top: -1rem;
  }
  .time-slot {
    text-align: center;
    display: grid;
    place-items: center;
    padding: 0.2rem 0.8rem;
    border-radius: 1rem;
    border: 2px solid rgb(234, 234, 234);
    font-weight: bold;
    font-size: 0.8rem;
    font-family: "Roboto Condensed", sans-serif;
    background: white;
    opacity: 0.6;
  }
  .time-slot-available {
    color: var(--med-bright-blue);
  }
  .time-slot-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }
  .time-slots-container {
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 4vw;
    font-size: 0.8rem;
    margin-top: 0.4rem;
    // margin-bottom: -2rem;
    // margin-bottom: -40rem;
    // z-index: 6;
    // position: absolute;
    // left: 1.8rem;
  }
  .time-slot-title {
    font-weight: 500;
    font-size: 0.7rem;
    margin: 0;
    font-weight: 600;
    background: white;
    border-radius: 1rem;
    padding: 0.1rem 0.2rem;
  }
`;

export default Wrapper;
