import styled from "styled-components";

const Wrapper = styled.aside`
  .text-cadet {
    // color: var(--space-cadet);
    font-weight: bold;
  }
  .text-center {
    margin-bottom: 1rem;
    font-weight: 400;
    border-bottom: 1px solid gray;
    width: 100%;
    height: 0.5rem;
  }
  .p-center {
    background: white;
    width: min-content;
    margin: 0 auto;
    padding: 0 0.4rem;
    color: var(--space-cadet);
    font-weight: bold;
  }
  .text-pink {
    color: var(--test-red);
  }
  .btn-payment {
    margin: 1rem 0;
    width: 100%;
    height: 48px;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    background: var(--federal-blue);
    // background: var(--med-bright-blue);
    background: var(--charcoal);
    background: var(--space-cadet);
    color: white;
    padding: 0;
    background: black;
  }
  .btn-venmo {
    border: none;
    height: min-content;
    width: min-content;
    padding: 0;
    max-width: 335px;
    border-radius: 4rem;
  }
  .btn-venmo-container {
    // width: 100%;
    margin: 1rem 0;
  }
  .beat-loader {
    position: fixed;
    left: 40vw;
  }
  p {
    color: var(--grey-180);
    font-size: 0.8rem;
    max-width: 60vw;
  }
  .edit-profile-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .edit-profile-heading {
    // width: min-content;
    width: 25vw;
    // border-radius: 2rem;
    // padding: 1rem 6vw;
    // background: rgb(244, 244, 244);
    // font-size: 1.2rem;
    letter-spacing: 0.06rem;
    // margin-bottom: 2rem;
    // border-bottom: 2px solid black;
    // margin-top: 1rem;
  }
  .edit-profile-name {
    // text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 3rem;
    font-family: "Roboto Condensed", sans-serif;
    color: rgb(80, 80, 80);
    margin-bottom: 0.8rem;
  }
  .p-top {
    margin-bottom: 1rem;
  }
  .btn-discard {
    background: var(--test-blue);
    color: var(--space-cadet);
  }
  .btn-edit {
    font-size: 1rem;
    padding: 1.4rem;
  }
  .btn-register {
    margin-bottom: 1rem;
    width: 10rem;
    height: 4rem;
    border-radius: 3rem;
    color: white;
    background: var(--grey-60);
    background: var(--med-bright-blue);
  }
  .btn-register:hover {
    background: var(--space-cadet);
    color: white;
  }
  .btn-save {
    background: var(--med-bright-blue);
    color: white;
  }
  .footer {
    height: 3rem;
    width: 100vw;
    border-top: 2px solid var(--grey-240);
  }
  .form {
    // padding-bottom: 2rem;
    background: white;
    font-family: "Roboto", sans-serif;
    border-radius: 1rem;
    // padding: 1rem 2rem 2rem 2rem;
    // min-height: 100vh;
    box-sizing: border-box;
    display: grid;
    place-items: center;
  }
  .form-login {
    // min-height: min-content;
    // margin: auto 0;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-checkbox-container {
    margin-bottom: 1rem;
  }
  .form-checkbox-label {
    font-size: 0.8rem;
    color: rgb(120, 120, 120);
  }
  .form-checkbox-row {
    display: flex;
    gap: 0.6rem;
    margin: 0.3rem 0;
  }
  .form-header {
    // width: 20rem;
    width: 100%;
    max-width: 420px;
    margin: 0.4rem 0;
    font-weight: 500;
    font-size: 1.4rem;
    color: black;
    // font-family: "Droid Sans",
    font-weight: bold;
    // margin: 0 1rem;
    background: rgb(248, 248, 248);
    padding: 0.6rem 1rem;
    box-sizing: border-box;
  }
  .payment-header {
    margin: 0;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    padding: 0;
    // font-weight: 400;
    color: white;
    // background: var(--med-bright-blue);
    box-sizing: border-box;
    width: 375px;
    width: 100%;
    margin-bottom: 1rem;
    // background: rgb(244, 244, 244);
    color: var(--med-bright-blue);
    color: var(--med-font-blue);
    // color: var(--space-cadet);
    // color: var(--federal-blue);

    // color: white;
  }

  .form-input {
    width: 100%;
    border: 2px solid var(--test-blue);
  }
  .form-textarea {
    border-radius: 1.5rem;
    border: 2px solid var(--grey-240);
    // color: var(--grey-180);
    padding-left: 0.8rem;
    padding-top: 0.6rem;
    background: none;
    resize: none;
  }

  .form-main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .form-payment {
    gap: 0.4rem;
    margin-top: 2rem;
    // padding: 1rem;
    box-sizing: border-box;
    position: relative;
  }
  .form-payment-input {
    text-align: center;
    width: 300px;
  }
  .form-select {
    width: 90%;
    border: none;
  }
  .form-select:focus {
    outline: none;
  }
  .link-register {
    margin: 1rem 0;
  }
  .p-bottom {
    color: var(--grey-80);
    margin-bottom: 1rem;
  }
  .profile-image {
    height: 250px;
  }
  .span-login {
    color: var(--bark-pink);
  }

  @media screen and (max-width: 400px) {
    .edit-profile-heading {
      width: 31vw;
    }
  }
`;

export default Wrapper;
