import styled from "styled-components";

const Wrapper = styled.footer`
  .footer-main {
    border-top: 8px solid rgb(244, 244, 244);
    color: black;
  }
  .footer-center {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
  }
  .link {
    letter-spacing: 0.03rem;
    color: var(--federal-blue);
    font-family: "Ubuntu", sans-serif;
  }
`;

export default Wrapper;
