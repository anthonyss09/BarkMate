import styled from "styled-components";

const Wrapper = styled.main`
  .add-friend {
    color: var(--test-red);
  }
  .beat-loader {
    position: fixed;
    top: 30vh;
    left: 40vw;
  }
  .back-button {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 1rem;
    align-self: flex-start;
  }
  .carousel {
    display: flex;
    align-items: center;
    border: 2px solid var(--test-blue);
    padding: 1rem 0;
  }
  .construction {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(60, 60, 60, 0.6);
    z-index: 20;
    // color: white;
    display: grid;
    place-items: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    background: rgb(250, 250, 250, 0.4);
    background: rgb(252, 252, 252, 0.4);
    display: grid;
    place-items: center;
  }
  .construction-center {
    text-align: center;
    padding: 0 2rem;
  }
  .construction-header {
    letter-spacing: 0.05rem;
    // color: var(--test-blue);
    color: var(--med-font-blue);
    font-size: 1.5rem;
  }
  .construction-link {
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--test-blue);
    color: var(--med-bright-blue);
    letter-spacing: 0.05rem;
  }
  .construction-link:hover {
    cursor: pointer;
  }
  .construction-p {
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
    color: white;

    // font-size: 1.8rem;
    letter-spacing: 0.1rem;
    color: black;
  }
  .dog-detail {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 2rem;
    font-weight: bold;
    border: 2px solid var(--grey-240);
    font-family: "Roboto Condensed", sans-serif;
  }
  .dog-detail-weight {
    border: 2px solid var(--med-font-blue);
  }
  .dog-detail-energy {
    border: 2px solid var(--med-bright-blue);
  }
  .dog-detail-breed {
    border: 2px solid var(--test-red);
  }
  .dog-details-container {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid rgb(244, 244, 244);
    padding-bottom: 1rem;
  }
  .group-image {
    width: 100px;
    height: 100px;
  }
  .group-name {
    width: 84%;
    font-size: 0.6rem;
    font-weight: bold;
    color: rgb(20, 20, 20);
    text-align: center;
  }
  .group-single {
    width: 120px;
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }
  .groups-container {
    display: flex;
    gap: 1rem;
  }
  .icon-instagram {
    color: rgb(225, 48, 108);
  }
  .icon-facebook {
    color: rgb(66, 103, 178);
  }
  .icon-star {
    color: var(--federal-blue);
  }
  .icon-twitter {
    color: rgb(29, 161, 242);
  }
  .location-container {
    padding: 0.2rem 0;
    border-radius: 1rem;
  }
  .location {
    font-size: 0.6rem;
    color: var(--med-font-blue);
    font-weight: bold;
  }
  .message-friend {
    color: var(--med-font-blue);
  }
  .members {
    height: min-content;
    background: var(--test-blue);
    padding: 0.2rem 0.6rem;
    border-radius: 2rem;
    font-size: 0.7rem;
    font-weight: bold;
    display: grid;
    place-items: center;
    margin-bottom: 0.4rem;
  }
  .option {
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
  }
  .option:hover {
    cursor: pointer;
  }
  .profile-page-about {
    margin-bottom: 1.6rem;
    padding-bottom: 1rem;
  }
  .profile-page-body {
    padding: 0 1rem;
  }
  .profile-page-dog-info {
    margin-bottom: 1.6rem;
  }
  .profile-page-groups {
    padding: 0.8rem 0.2rem;
    margin-bottom: 1.6rem;
    position: relative;
  }
  .profile-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .profile-page-image {
    width: 100vw;
    margin-bottom: 0.6rem;
  }
  .profile-page-main {
    padding-bottom: 2rem;
    margin-top: -1.4rem;
  }
  .profile-preview-name {
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
    align-self: flex-start;
    margin-bottom: 0.4rem;
  }
  .profile-page-p {
    border-radius: 2rem;
    color: rgb(60, 60, 60);
    font-size: 0.9rem;
  }
  .profile-page-options {
    width: 100%;
    padding: 0.4rem 0;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(244, 244, 244);
  }
  .profile-page-social-links {
    min-height: 120px;
    position: relative;
    margin-top: 1rem;
    padding: 0.8rem 0.2rem;
  }
  .profile-page-views {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }
  .stars-container {
    color: rgb(100, 100, 100);
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
  .section-header {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    font-family: "Roboto Condensed", sans-serif;
  }
  .social-links-container {
    display: flex;
    gap: 1rem;
  }
  .time-slot {
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
    border: 2px solid rgb(240, 240, 240);
    font-weight: bold;
    font-family: "Roboto Condensed", sans-serif;
  }
  .time-slot-column {
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }
  .time-slots-container {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 1.6rem;
  }
  .time-slot-available {
    color: var(--med-bright-blue);
  }
  .time-slot-title {
    font-weight: 600;
    color: rgb(100, 100, 100);
  }
  .view-photos {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 0.9rem;
    gap: 0.4rem;
    color: black;
    background: var(--test-blue);
    width: min-content;
    padding: 0.4rem 0.8rem;
    border-radius: 1.5rem;
  }
`;

export default Wrapper;
