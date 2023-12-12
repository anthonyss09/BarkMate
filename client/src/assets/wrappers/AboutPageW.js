import styled from "styled-components";

const Wrapper = styled.section`
  .about-page-header {
    position: absolute;
    margin-top: -5rem;
    text-align: center;
    width: 100vw;
    color: white;
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    transition: var(--transition-main);
  }
  .about-page-header-scrolled {
    color: var(--test-blue);
    font-size: 6rem;
  }
  .about-page-header-container {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    background: none;
    display: grid;
    place-items: center;
  }
  .about-page-main {
    width: 100vw;
    letter-spacing: 0.02rem;
    // font-family: "Roboto Condensed", sans-serif;
    line-height: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
    box-sizing: border-box;
  }
  .about-page-center {
    width: 100%;
    padding: 1rem 3rem;
    box-sizing: border-box;
    border-radius: 2rem;
    text-align: center;
    padding-top: 0;
    font-weight: 500;
    line-height: 1.8rem;
    z-index: 2;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: white;
    border: 1px solid var(--test-blue);
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    letter-spacing: 0.02rem;
    padding: 1rem 2rem;
    margin-top: 0.6rem;
    justify-content: center;
  }
  .btn-login {
    margin-right: 1rem;
    padding: 0.4rem 1rem;
    border: none;
    color: var(--charcoal);
    font-weight: 600;
    background: white;
    box-shadow: none;
  }
  .btn-tip {
    margin-bottom: 2rem;
    width: 130px;
    margin: 2rem auto;
    border-radius: 1rem;
    border-radius: 2rem;
    display: flex;
    font-size: 1rem;
    box-shadow: var(--shadow-main-light);
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    display: flex;
    justify-content: space-around;
    z-index: 2;
  }
  .first-line {
    color: var(--med-font-blue);
    font-size: 1.4rem;
    line-height: 2.6rem;
    letter-spacing: 0.05rem;
  }
  .icon-dog {
    color: var(--bark-pink);
  }
  .icon-venmo {
    color: var(--med-bright-blue);
  }
  .img-one {
    width: 100%;
    margin: 0 auto;
  }
  .link {
    z-index: 2;
  }
  .nav-main {
    margin: 0;
  }
  .nav-main-landing {
    position: static;
  }
  .p-one {
    border-radius: 2rem;
    place-items: center;
    text-align: center;
  }
  .row-one {
    width: 100vw;
  }

  @media (max-width: 400px) {
    .about-page-header {
      margin-top: -3.6rem;
    }
  }
`;

export default Wrapper;
