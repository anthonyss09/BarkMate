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
  .group-preview-about {
    width: 100%;
    margin-top: -1.4rem;
  }
  .group-preview-button {
    font-weight: 500;
    letter-spacing: 0.02rem;
    color: var(--space-cadet);
  }
  .group-preview-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }
  .group-preview-center {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .group-preview-body {
    gap: 0.8rem;
    padding-top: 0.6rem;
  }
  .group-preview-header {
    width: 92vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.6rem;
  }
  .group-preview-image {
    width: 94vw;
    border-radius: 1rem;
  }
  .group-preview-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .group-preview-main {
    width: 100vw;
    background: white;
    padding: 0.6rem;
    box-shadow: 2px 2px 5px lightGrey;
  }
  .group-preview-members {
    background: var(--test-blue);
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
    font-size: 0.7rem;
    font-weight: bold;
    display: grid;
    place-items: center;
  }
  .group-preview-name {
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Roboto Condensed", sans-serif;
  }
  .group-preview-name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .group-preview-options {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: -2rem;
  }
  .group-preview-p {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.4rem 0.2rem;
    background: var(--grey-248);
    background: white;
    color: rgb(60, 60, 60);
  }
  .icon-message {
    color: var(--med-bright-green);
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
  .option {
    width: 8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(230, 230, 230);
    padding: 0.4rem 0.8rem;
    border-radius: 1rem;
    background: white;
    margin-bottom: 0.6rem;
    z-index: 1;
    box-shadow: 2px 2px 5px lightGrey;
  }
  .option-container {
    z-index: 1;
    padding: 0.3rem;
    background: white;
    border-radius: 1.3rem;
  }
`;

export default Wrapper;
