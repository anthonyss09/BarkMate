import styled from "styled-components";

const Wrapper = styled.aside`
  .about-heading {
    padding: 0 0.2rem;
    font-size: 1.2rem;
    font-family: "Roboto Condensed", sans-serif;
  }
  .add-friend {
    color: var(--test-red);
  }
  .icon-star {
    color: var(--federal-blue);
  }
  .location-container {
    padding: 0.2rem 0;
    border-radius: 1rem;
  }
  .location {
    font-size: 0.6rem;
    color: rgb(100, 100, 100);
    font-weight: bold;
  }
  .message-friend {
    color: var(--med-bright-green);
  }
  .option {
    width: 8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(230, 230, 230);
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
    // background: white;
    margin-bottom: 0.6rem;
    z-index: 1;
    // box-shadow: 2px 2px 5px lightGrey;
  }
  .option:hover {
    cursor: pointer;
  }
  // .option-container {
  //   z-index: 1;
  //   padding: 0.3rem;
  //   background: white;
  //   border-radius: 1.3rem;
  // }
  .profile-preview-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-preview-about {
    width: 100%;
    // margin-top: -1.4rem;
  }
  .profile-preview-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .profile-preview-header {
    width: 92vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.6rem;
  }

  .profile-preview-main {
    // width: 100vw;
    width: 97vw;
    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    align-self: center;
    // box-shadow: 2px 2px 5px lightGrey;
  }
  .profile-preview-name {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    color: black;
    border-radius: 3rem;
    font-family: "Roboto Condensed", sans-serif;
  }
  .profile-preview-name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-preview-options {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: -3.6rem;
    margin-bottom: 0.4rem;
    // position: relative;
  }
  .profile-preview-p {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.4rem 0.2rem;
    color: rgb(60, 60, 60);
  }
  .profile-preview-pic {
    width: 94vw;
    border-radius: 1rem;
    z-index: 5;
  }
  .profile-preview-verification {
    margin-top: -1rem;
  }
  .time-slot {
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    display: grid;
    place-items: center;
    padding: 0.4rem 1rem;
    padding: 0.2rem 0.8rem;
    border-radius: 0.1rem;
    border-radius: 1rem;
    border: 2px solid rgb(234, 234, 234);
    font-weight: bold;
    font-family: "Roboto Condensed", sans-serif;
    background: white;
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
    gap: 0.2rem;
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }
  .time-slot-title {
    font-weight: 500;
    font-size: 0.7rem;
    margin: 0;
    font-weight: 600;
  }
`;

export default Wrapper;
