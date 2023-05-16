import styled from "styled-components";

const Wrapper = styled.main`
  .about-header {
    font-size: 1rem;
    // color: var(--med-bright-blue);
    color: rgb(80, 80, 80);
    margin-bottom: 0.4rem;
    // margin-left: 2rem;
    font-family: "Roboto Condensed", sans-serif;
  }
  .add-friend {
    color: var(--test-red);
  }
  .back-button {
    width: 30vw;
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
  .dog-detail {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 2rem;
    font-weight: bold;
    // color: var(--space-cadet);
    // background: var(--grey-240);
    border: 2px solid var(--grey-240);
    // color: rgb(60, 60, 60);
    font-family: "Roboto Condensed", sans-serif;
  }
  .dog-detail-weight {
    // background: var(--sunglow);
    // background: var(--med-bright-green);
    // color: white;
    border: 2px solid var(--med-bright-green);
    // color: var(--med-bright-green);
  }
  .dog-detail-energy {
    // background: var(--crystal-purple);
    // background: var(--test-blue);
    // background: var(--med-bright-blue);
    // color: white;
    border: 2px solid var(--med-bright-blue);
    // background: var(--test-blue);
    // color: black;
  }

  .dog-detail-breed {
    // background: var(--vivid-sky-blue);
    // background: var(--grey-248);
    // background: var(--light-light-pink);
    // background: var(--test-red);
    // color: white;
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
    font-size: 0.7rem;
    font-weight: bold;
    color: rgb(20, 20, 20);
    text-align: center;
  }
  .group-single {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    // border-radius: 0.5rem;
    // border: 1px solid var(--space-cadet);
    // padding: 0.6rem 0.2rem;
  }
  .groups-container {
    // background: var(--grey-248);
    // background: var(--test-blue);
    padding: 0.8rem 0.2rem;
  }
  .icon-back-arrow {
  }
  .icon-camera {
  }
  .icon-star {
    color: var(--med-bright-blue);
    // color: var(--federal-blue);
  }
  .icon-star-og {
    color: var(--sunglow);
  }
  .location-container {
    padding: 0.4rem 0.8rem;
    border-radius: 1.5rem;
    border: 1.5px solid rgb(80, 80, 80);
    // display: flex;
    // align-items: center;
  }
  .location-text {
    font-size: 0.8rem;
    color: rgb(80, 80, 80);
    color: var(--med-bright-blue);
    font-family: "Roboto Condensed", sans-serif;
  }
  .message-friend {
    color: var(--med-bright-green);
  }
  .option {
    border: 2px solid rgb(240, 240, 240);
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
  }
  .profile-page-about {
    // border-radius: 2.5rem;
    color: rgb(80, 80, 80);
    margin-bottom: 1.6rem;
    // border-bottom: 1px solid rgb(244, 244, 244);
    padding-bottom: 1rem;
    // background: var(--test-blue);
  }
  .profile-page-body {
    padding: 0 1rem;
  }
  .profile-page-dog-info {
    margin-bottom: 1.6rem;
  }
  .profile-page-groups {
    margin-bottom: 1.6rem;
  }
  .profile-page-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
  .profile-page-image {
    width: 80vw;
    margin-bottom: 0.6rem;
  }
  .profile-page-main {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
  .profile-page-name {
    color: rgb(60, 60, 60);
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
    font-weight: 500;
    font-family: "Roboto Condensed", sans-serif;
  }
  .profile-page-p {
    border-radius: 2rem;
    color: rgb(120, 120, 120);
    color: rgb(60, 60, 60);
    font-size: 0.9rem;
    background: var(--test-blue);
    background: var(--grey-248);
    padding: 1rem;
    background: white;
    border: 2px solid rgb(240, 240, 240);
  }
  .profile-page-options {
    width: 100%;
    margin-bottom: 1.6rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    border-bottom: 1px solid rgb(244, 244, 244);
  }
  .profile-page-social-links {
    margin-top: 1rem;
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
    // border: 2px solid var(--med-bright-blue);
    // background: var(--test-blue);
    color: var(--med-bright-blue);
  }
  .time-slot-needed {
    // border: 2px solid var(--test-red);
    // color: var(--test-red);
  }
  .time-slot-p {
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
    // margin-bottom: 2rem;
    background: var(--test-blue);
    // background: var(--grey-248);
    width: min-content;
    padding: 0.4rem 0.8rem;
    border-radius: 1.5rem;
  }
`;

export default Wrapper;
