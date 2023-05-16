import styled from "styled-components";

const Wrapper = styled.footer`
  .footer-main {
    background: var(--test-blue);
    border-top: 1px solid rgb(234, 234, 234);
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
    color: black;
  }
  .link:hover {
    color: white;
  }
`;

export default Wrapper;
