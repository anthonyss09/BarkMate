import styled from "styled-components";

const Wrapper = styled.section`
  .btn-demo {
    width: min-content;
    border: 3px solid var(--med-font-blue);
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.6rem 0.8rem;
    padding: 0.9rem;
    color: var(--federal-blue);
    box-shadow: var(--shadow-main-light);
    letter-spacing: 0.05rem;
    font-weight: bold;
    background: white;
  }

  .btn-join {
    height: 40px;
    border-radius: 40px;
    letter-spacing: 0.02rem;
    text-decoration: none;
    display: grid;
    place-items: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--federal-blue);
    background: white;
    border: none;
    padding: 0;
    margin: 0;
  }

  .btn-join:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  .btn-link {
    color: var(--federal-blue);
    color: black;
    letter-spacing: 0.05rem;
    font-family: "Roboto", sans-serif;
  }

  .btn-learn {
    width: 120px;
    margin-bottom: 1rem;
    border-radius: 0;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.02rem;
    background: rgb(240, 240, 240);
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

  .landing-chat-center {
    display: flex;
    box-sizing: border-box;
    padding: 0 1rem;
    position: relative;
  }

  .landing-chat-container {
    min-width: 260px;
    max-width: 460px;
    margin: 4rem auto;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .landing-chat-header {
    width: min-content;
    height: min-content;
    border: 2px solid white;
    padding: 1rem;
    color: white;
    margin-top: 7rem;
    position: absolute;
    font-weight: 500;
  }

  .landing-header-learn {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 500;
    background: white;
    margin: 0;
    padding: 2.5rem 4rem;
    padding-bottom: 0;
    box-sizing: border-box;
    text-align: center;
    line-height: 1.3rem;
    color: rgb(160, 160, 160);
    letter-spacing: 0.05rem;
  }

  .landing-main {
    padding-top: 4.4rem;
    position: relative;
    display: grid;
    place-items: center;
    box-sizing: border-box;
  }

  .landing-post-header {
    width: 150px;
    padding: 1rem;
    text-align: center;
    color: white;
    border: 2px solid white;
    font-weight: 500;
  }

  .landing-post-img {
    width: 65vw;
    max-width: 300px;
    border-radius: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    border: 1px solid rgb(220, 220, 220);
    border-bottom: none;
    margin-top: 1rem;
  }

  .landing-section-chat {
    width: 100vw;
    background: var(--bark-pink);
    box-sizing: border-box;
    display: grid;
    place-items: center;
  }

  .landing-section-learn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  }

  .landing-section-post {
    width: 100vw;
    background: var(--med-bright-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
  }

  .landing-top-header {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0;
    margin: 0;
    padding: 0;
    max-width: 40vw;
    letter-spacing: 0.06rem;
    z-index: 4;
    position: static;
    color: rgb(80, 80, 80);
    color: rgb(190, 190, 190);
    background: none;
    margin-top: -3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .landing-top-header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .landing-top-img {
    border-radius: 0.5rem;
    box-shadow: 10px 5px 10px rgb(40, 40, 40);
    transform: rotate(-10deg);
    z-index: 10;
    border: 1px solid rgb(220, 220, 220);
    margin-top: 1rem;
    max-height: 300px;
  }

  .landing-top-img-container {
    transform: rotate(-10deg);
    border: 4px solid var(--test-blue);
    border-radius: 1rem;
  }

  .landing-top-section {
    width: 80vw;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .overflow-hidden {
    overflow-x: hidden;
    position: fixed;
  }

  .p-connect {
    font-size: 1.2rem;
  }

  .p-meet {
    font-size: 1.8rem;
  }

  @media (max-width: 400px) {
    .btn-demo {
      font-size: 1.2rem;
    }
    .landing-chat-header {
      padding: 0.8rem;
    }
    .landing-top-section {
      height: 55vh;
    }
    .landing-top-img {
      max-height: 250px;
    }
    .back-one {
      width: 100vw;
      height: 65vh;
    }
  }
`;

export default Wrapper;
