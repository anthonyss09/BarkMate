import styled from "styled-components";

const Wrapper = styled.footer`
  .footer-main {
    border-top: 8px solid rgb(220, 220, 220);
    // border-top: 8px solid rgb(244, 244, 244);
  }
  .footer-center {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    gap: 0.8rem;
    padding: 1rem;
  }
  .link {
    color: rgb(60, 60, 60);
    color: var(--charcoal);
    letter-spacing: 0.03rem;
    // color: var(--med-font-blue);
    // color: var(--federal-blue);
  }
`;

export default Wrapper;
