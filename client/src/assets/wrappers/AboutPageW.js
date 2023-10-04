import styled from "styled-components";

const Wrapper = styled.section`
  .about-page-main {
    width: 100vw;
    letter-spacing: 0.02rem;
    // font-family: "Montserrat", sans-serif;
    // font-family: "Noto Sans SC", sans-serif;
    font-family: "Roboto Condensed", sans-serif;
    // font-family: "Shantell Sans", cursive;
    // font-family: "Ubuntu", sans-serif;
    // font-family: "Ysabeau", sans-serif;
    line-height: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
  .about-page-center {
    width: 100vw;
    padding: 1rem 3rem;
    // background: var(--test-blue);
    // margin: 2rem;
    box-sizing: border-box;
    border-radius: 2rem;
    // box-shadow: 5px 2px 5px rgb(80, 80, 80);
    margin-top: 4rem;
    text-align: center;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    // background: black;
    background: var(--med-bright-blue);
    color: white;
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    letter-spacing: 0.02rem;
  }
  .btn-login {
    margin-right: 1rem;
    padding: 0.4rem 1rem;
    border: none;
    // color: var(--federal-blue);
    color: var(--charcoal);
    font-weight: 600;
    background: white;
    box-shadow: none;
    // font-family: "Roboto Condensed", sans-serif;
  }
  .icon-dog {
    // position: absolute;
    // top: 40vh;
    // left: 40vw;
    // color: white;
    color: var(--bark-pink);
  }
  .img {
    width: 260px;
    height: 260px;
    border-radius: 20rem;
  }
  .img-one {
    margin: 0 auto;
  }
  .nav-main {
    margin: 0;
  }
  .nav-main-landing {
    position: static;
  }
  .p-one {
    // color: white;
    // padding: 1rem;
    border-radius: 2rem;
    // width: 220px;
    // height: 220px;
    place-items: center;
    text-align: center;
    // font-size: 1.2rem;
    // font-weight: bold;
    // font-family: "Dosis", sans-serif;
  }
  .row-one {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--bark-pink);
    height: 150px;
    padding: 1rem 0;
  }
`;

export default Wrapper;