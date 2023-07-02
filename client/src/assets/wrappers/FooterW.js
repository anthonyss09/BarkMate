import styled from "styled-components";

const Wrapper = styled.footer`
  .footer-main {
    // background: var(--test-blue);
    border-top: 8px solid rgb(244, 244, 244);
  }
  .footer-center {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 2rem;
  }
  .link {
    color: rgb(60, 60, 60);
  }
  .link:hover {
  }
`;

export default Wrapper;
