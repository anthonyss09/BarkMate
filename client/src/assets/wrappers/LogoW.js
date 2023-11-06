import styled from "styled-components";

const Wrapper = styled.div`
  .icon-payment {
    color: var(--test-red);
    // color: var(--bark-pink);
    color: var(--federal-blue);
    // margin-bottom: -3rem;
    margin: 0 -0.05rem;
    // color: rgb(80, 80, 80);
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo-nav {
    font-size: 1.4rem;
    // font-size: 2rem;
    // color: var(--federal-blue);
    font-weight: bold;
    // margin-bottom: 1rem;
    text-align: center;
    font-weight: 400;
    // margin-left: -2.2rem;
    letter-spacing: 0.05rem;
    font-family: "Montserrat", sans-serif;
    z-index: 4;
    position: static;
    color: rgb(80, 80, 80);
    color: var(--federal-blue);

    font-weight: 500;
  }
  .logo-login {
    margin-left: -1rem;
    font-size: 2rem;
    color: var(--federal-blue);
  }
  .logo-register {
    font-size: 1.4rem;
    margin: 1rem 0;
  }
  .logo-payment {
    font-size: 2rem;
    // font-size: 1.8rem;
    // font-size: 3rem;
    margin-left: -1.4rem;
    letter-spacing: 0.1rem;
    letter-spacing: 0.06rem;
    font-family: "Montserrat", sans-serif;
    z-index: 4;
    position: static;
    color: rgb(80, 80, 80);
    color: var(--federal-blue);
    font-weight: 500;
  }
`;

export default Wrapper;
