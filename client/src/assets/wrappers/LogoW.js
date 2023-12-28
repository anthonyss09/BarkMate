import styled from "styled-components";

const Wrapper = styled.div`
  .icon-payment {
    color: var(--federal-blue);
    margin: 0 -0.05rem;
  }
  .logo {
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
  }
  .logo-big {
    color: var(--federal-blue);
    font-size: 3rem;
  }
  .logo-nav {
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: 0.05rem;
    font-family: "Montserrat", sans-serif;
    z-index: 2;
    position: static;
    color: var(--federal-blue);
    font-weight: 500;
  }
  .logo-login {
    font-size: 2rem;
    color: var(--federal-blue);
  }
  .logo-register {
    font-size: 1.4rem;
    margin: 1rem 0;
  }
  .logo-payment {
    font-size: 2rem;
    margin-left: -1.4rem;
    letter-spacing: 0.06rem;
    font-family: "Montserrat", sans-serif;
    z-index: 4;
    position: static;
    color: var(--federal-blue);
    font-weight: 500;
  }
`;

export default Wrapper;
