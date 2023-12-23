import styled from "styled-components";

const Wrapper = styled.aside`
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;

  .about-heading {
    padding: 0 0.2rem;
    font-size: 1.2rem;
    font-family: "Roboto Condensed", sans-serif;
  }
  .add-friend {
    width: min-content;
    height: min-content;
    display: flex;
    color: var(--test-red);
    background: white;
    border: none;
    padding: 0;
    margin: 0;
  }
  .btn-add-friend {
    height: min-content;
    padding: 0;
    background: white;
    border: none;
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
    color: var(--med-font-blue);
  }
  .message-friend {
    color: var(--med-font-blue);
  }
  .option {
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    box-sizing: border-box;
    background: white;
  }
  .profile-preview-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.6rem 0;
  }
  .profile-preview-center {
    width: 100%;
    max-width: 490px;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    position: relative;
  }
  .profile-preview-header {
    width: 92vw;
    max-width: 400px;
    gap: 1rem;
    margin: 0.2rem 0;
  }

  .profile-preview-name {
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
    padding-bottom: 0.4rem;
  }
  .profile-preview-p {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.4rem 0.2rem;
    box-sizing: border-box;
    color: black;
  }
  .profile-preview-pic {
    width: 100%;
    max-height: 420px;
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
  }
  .time-slot-title {
    font-size: 0.7rem;
    margin: 0;
    font-weight: 600;
    background: white;
    border-radius: 1rem;
    padding: 0.1rem 0.2rem;
  }
`;

export default Wrapper;
