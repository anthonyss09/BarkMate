import styled from "styled-components";

const Wrapper = styled.section`
  about-p {
    color: var(--grey-80);
  }
  .btn-about {
    width: 14rem;
    padding: 0.8rem;
    margin-top: 0.4rem;
    margin-bottom: 1.8rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border-radius: 0rem;
    border-radius: 1rem;
    border: none;
    background: var(--bark-pink);
    background: var(--test-red);
    colr: #023e8a;
    color: white;
  }
  .btn-paw {
    margin-right: 3.6rem;
    colr: #023e8a;
  }
  .btn-about:hover {
    background: var(--grey-248);
  }
  .about-heading {
    margin: 0;
    margin-bottom: 1.2rem;
    color: var(--grey-60);
    font-size: 1.4rem;
    letter-spacing: 0.02rem;
    font-weight: 500;
    font-family: "Patrick Hand", cursive;
    // font-family: "Ubuntu", sans-serif;
  }
  .about-main {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-center {
    text-align: center;
    border-radius: 1rem;
    padding: 1.8rem;
    padding-top: 1rem;
    font-size: 0.8rem;
  }
`;

export default Wrapper;
