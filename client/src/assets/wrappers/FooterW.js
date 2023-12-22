import styled from "styled-components";

const Wrapper = styled.footer`
  border-top: 8px solid rgb(244, 244, 244);
  color: black;
  padding-bottom: 1rem;
  position: relative;
  a {
    text-decoration: none;
    color: var(--med-font-blue);
  }

  .footer-center {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .icon-credits {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 0.7rem;
    color: rgb(160, 160, 160);
  }
  .link {
    letter-spacing: 0.05rem;
    color: var(--federal-blue);
    // font-family: "Ubuntu", sans-serif;
  }
  .llc {
    text-align: center;
    color: var(--bark-pink);
    font-size: 0.6rem;
    color: rgb(160, 160, 160);
  }
  .llc-link {
    font-size: 0.6rem;
    color: var(--llc-blue);
    font-weight: bold;
    letter-spacing: 0;
  }
`;

export default Wrapper;
