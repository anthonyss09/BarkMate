import styled from "styled-components";
import meshGradientTwo from "../images/mesh-gradient-3.png";

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
  .btn-learn {
    margin-top: 1rem;
    border-radius: 0;
    width: 200px;
    font-size: 1rem;
    letter-spacing: 0.02rem;
  }
  .btn-tip {
    margin-bottom: 2rem;
    width: 200px;
    margin: 2rem auto;
    // margin-bottom: 1rem;
    border-radius: 0;
    display: flex;
    font-size: 1rem;
    box-shadow: var(--shadow-main-light);
    display: flex;
    justify-content: center;
    border-radius: 1rem;
  }
  h1 {
    font-size: 1.8rem;
    color: var(--test-blue);
    font-weight: 400;
    color: var(--federal-blue);
    text-align: center;
    flex-direction: column;
    margin-bottom: 0;
    // margin-left: 1rem;
    // margin-right: 1rem;
    margin: 0;
    padding: 0;
    max-width: 40vw;
    letter-spacing: 0.06rem;
    font-family: "Montserrat", sans-serif;
    z-index: 4;
    position: static;
    color: rgb(80, 80, 80);
    background: white;
    background: none;
    // color: white;
  }
  .second-heading {
    margin-bottom: 4rem;
  }
  span {
    height: min-content;
    margin: 0;
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
    margin-left: 5rem;
    height: 60px;
    width: 60px;
    height: 80px;
    width: 80px;
    margin: 0 auto;
    background: var(--med-bright-blue);
    color: white;
    margin-top: 0.6rem;
    font-size: 1rem;
    border-radius: 40px;
    background: rgb(230, 230, 230);
    color: black;
    letter-spacing: 0.02rem;
    text-decoration: none;
    display: grid;
    place-items: center;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .btn-join:hover {
    transform: scale(1.1);
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease;
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
    // border-bottom: 8px solid rgb(230, 230, 230);
  }
  .span-share {
    letter-spacing: 0.1rem;
    color: var(--med-bright-blue);
    font-size: 2.2rem;
  }
  .span-responsibilities {
  }
  .section-landing-image-jm {
    // width: 70vw;
    // border-radius: 1rem 1rem 0 0;
    border-radius: 0.5rem;
    // width: 50vw;
    // max-width: 250px;
    // margin: 4rem 2rem;
    box-shadow: 10px 5px 10px rgb(40, 40, 40);
    transform: rotate(-10deg);
    z-index: 10;
    border: 1px solid rgb(220, 220, 220);
    margin-top: 1rem;
    max-height: 300px;
  }
  .section-landing-image-jm-container {
    // max-height: 100px;
    transform: rotate(-10deg);
    border: 4px solid pink;
    // margin-right: 4rem;
  }
  .blue-container-image-jm {
  }
  .section-landing-image-post {
    border-radius: 0.5rem;
    width: 250px;
    width: 65vw;
    max-width: 300px;
    border: 1px solid rgb(220, 220, 220);
    box-shadow: 10px 5px 10px rgb(40, 40, 40);
    margin: 4rem 0;
  }
  .section-landing-chat {
    margin: 4rem auto;
    width: 100vw;
    max-width: 460px;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  .section-landing-chat-center {
    width: 100vw;
    background: var(--bark-pink);
    // border-top: 8px solid rgb(230, 230, 230);
    // border-bottom: 8px solid rgb(230, 230, 230);
  }
  .section-landing-center {
    display: flex;
    align-items: center;
    max-width: 100%;
    // max-height: 50vh;
    // height: 60vh;
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
    display: flex;
    gap: 2rem;
    height: min-content;
    width: 80vw;
    justify-content: center;
    height: 60vh;
  }
  .section-landing-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section-landing-main {
    padding-top: 4.4rem;
    overflow-x: hidden;
    position: relative;
    display: grid;
    place-items: center;
  }
  .section-landing-heading {
    width: 100%;
    background: white;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    // padding: 2.2rem 0;
    color: black;
    padding-top: 1rem;
    letter-spacing: 0.02rem;
  }
  @media (max-width: 400px) {
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
    .section-landing-center {
      // height: 50vh;
    }
    // .section-landing-center-column {
    //   height: 85vh;
    // }
    .section-landing-chat-center {
      padding: 0 0.4rem;
      box-sizing: border-box;
    }
    .section-landing-header {
      height: 50vh;
    }

    h1 {
      // margin-bottom: 1rem;
      // margin-bottom: 2rem;
      // margin-left: 1rem;
      // margin-right: 1rem;
      font-size: 1.2rem;
      // margin-bottom: -4rem;
      // margin-bottom: 0.6rem;
      margin-top: -1rem;
      margin-left: -1rem;
    }
  }
`;

export default Wrapper;
