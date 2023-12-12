import styled from "styled-components";

const Wrapper = styled.section`
  .blue {
    width: 200vw;
    height: 80vw;
    position: absolute;
    top: -12rem;
    left: -11rem;
    transform: rotate(-30deg);
    background: var(--med-bright-blue);
  }
  .btn-demo {
    width: min-content;
    border: 3px solid var(--med-font-blue);
    // margin-top: 1rem;
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.6rem 0.8rem;
    padding: 0.9rem;
    color: var(--federal-blue);
    box-shadow: var(--shadow-main-light);
    letter-spacing: 0.05rem;
    font-weight: bold;
  }
  .btn-learn {
    margin-top: 1rem;
    border-radius: 0;
    width: 200px;
    font-size: 1rem;
    letter-spacing: 0.02rem;
  }
  .btn-tip {
    margin-bottom: 2rem;
    width: 130px;
    margin: 2rem auto;
    display: flex;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
    border-radius: 2rem;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    flex-direction: column;
    margin-bottom: 0;
    margin: 0;
    padding: 0;
    max-width: 40vw;
    letter-spacing: 0.06rem;
    font-family: "Montserrat", sans-serif;
    z-index: 4;
    position: static;
    color: rgb(80, 80, 80);
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -3rem;
  }
  .section-landing-header-text {
    // margin-top: -4rem;
  }
  .second-heading {
    margin-bottom: 4rem;
  }
  span {
    height: min-content;
    margin: 0;
  }
  .span-connect {
    font-size: 1.4rem;
  }
  .span-responsibilities {
    // margin-top: 1rem;
  }
  .back {
    position: absolute;
    background: var(--bark-pink);
  }
  .back-one {
    height: 450px;
    width: 450px;
    top: -4rem;
    right: -6rem;
    border-radius: 20rem;
  }
  .back-two {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    top: 20rem;
    left: 1rem;
  }
  .bark {
    font-style: italic;
  }
  .btn-join {
    // margin-left: 5rem;
    height: 80px;
    width: 80px;
    // margin: 0 auto;
    // margin: 1rem 0;
    color: white;
    border-radius: 40px;
    color: black;
    letter-spacing: 0.02rem;
    text-decoration: none;
    display: grid;
    place-items: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--federal-blue);
  }
  .btn-join:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
  .btn-link {
    color: var(--federal-blue);
    color: black;
    // font-size: 1.4rem;
    letter-spacing: 0.05rem;
    font-family: "Roboto", sans-serif;
  }
  .icon-dog {
    color: var(--med-bright-blue);
  }
  .second-heading {
    width: 100vw;
    max-width: 100vw;
    font-size: 1rem;
    background: white;
    margin: 0;
    padding: 2.5rem 4rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 1.3rem;
  }
  .span-share {
    letter-spacing: 0.1rem;
    color: var(--med-bright-blue);
    font-size: 2.2rem;
  }
  .section-landing-image-jm {
    border-radius: 0.5rem;
    box-shadow: 10px 5px 10px rgb(40, 40, 40);
    transform: rotate(-10deg);
    z-index: 10;
    border: 1px solid rgb(220, 220, 220);
    margin-top: 1rem;
    max-height: 300px;
  }
  .section-landing-image-jm-container {
    transform: rotate(-10deg);
    // border: 4px solid pink;
    border: 4px solid var(--test-blue);
    border-radius: 1rem;
    // margin-top: -4rem;
    // margin-left: -1rem;
  }
  .section-landing-image-post {
    width: 65vw;
    max-width: 300px;
    border-radius: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    border: 1px solid rgb(220, 220, 220);
    box-shadow: 10px 5px 10px rgb(40, 40, 40);
    // margin: 4rem 0;
    margin-top: 1rem;
  }
  .section-landing-chat {
    margin: 4rem auto;
    max-width: 460px;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  .section-landing-chat-center {
    // width: 80vw;
    background: var(--bark-pink);
    box-sizing: border-box;
  }
  .section-landing-chat-container {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 1rem;
    background: var(--bark-pink);
    display: grid;
    place-items: center;
  }
  .section-landing-chat-header {
    color: white;
    margin-top: -4rem;
    margin-right: -2rem;
    // margin-left: 1rem;
    border: 2px solid white;
    padding: 0.4rem;
    z-index: 4;
  }
  .section-landing-center {
    display: flex;
    align-items: center;
    max-width: 100%;
    display: flex;
  }
  .section-landing-center-column {
    flex-direction: column;
  }
  .section-landing-post {
    width: 100vw;
    background: var(--med-bright-blue);
    align-items: center;
    justify-content: center;
  }
  .section-landing-header {
    // padding-top: 1rem;
    display: flex;
    gap: 2rem;
    height: min-content;
    width: 80vw;
    justify-content: center;
    height: 65vh;
  }
  .section-landing-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section-landing-main {
    padding-top: 4.4rem;
    position: relative;
    display: grid;
    place-items: center;
    box-sizing: border-box;
  }
  .overflow-hidden {
    overflow-x: hidden;
    position: fixed;
  }
  .section-landing-heading {
    width: 100%;
    background: white;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: black;
    padding-top: 1rem;
    letter-spacing: 0.02rem;
  }
  .section-landing-post-header {
    width: 200px;
    color: white;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    border: 2px solid white;
    padding: 0.4rem;
    margin-top: 2rem;
  }

  @media (max-width: 400px) {
    .btn-demo {
      font-size: 1.2rem;
    }
    .section-landing-main {
    }
    .section-landing-image-jm {
      // width: 55vw;
      max-height: 250px;
    }
    .back-one {
      width: 100vw;
      height: 65vh;
    }
    .section-landing-chat-center {
      padding: 0 0.4rem;
      box-sizing: border-box;
    }
    .section-landing-chat-header {
      margin-top: -8rem;
    }
    .section-landing-header {
      height: 55vh;
      // height: 55vh;
    }
    .section-landing-post-header {
      font-size: 1.6rem;
    }
    .span-connect {
      // font-size: 1.3rem;
    }
    span {
      font-size: 1.6rem;
    }
    h1 {
      font-size: 1.2rem;
      font-size: 1.4rem;
      // margin-top: -1rem;
      // margin-left: -1rem;
    }
  }
`;

export default Wrapper;
