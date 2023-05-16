import styled from "styled-components";

const Wrapper = styled.aside`
  .icon {
    color: rgb(80, 80, 80);
  }
  .icon-heart-fill {
    color: var(--med-red);
  }
  .post-body-pic {
    width: 100%;
    // height: 70vh;
  }
  .post-heading {
    padding: 1rem;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .post-heading-pic {
    height: 40px;
    width: 40px;
    border-radius: 2rem;
  }
  .post-info {
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .post-likes {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.8rem;
  }
  .post-main {
    background: white;
  }
  .post-name {
    font-weight: bold;
    font-size: 0.8rem;
  }
  .post-options {
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  .post-text {
    font-size: 0.8rem;
    padding: 1rem;
  }
`;

export default Wrapper;
