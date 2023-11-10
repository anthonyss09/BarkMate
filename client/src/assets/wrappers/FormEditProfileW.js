import styled from "styled-components";

const Wrapper = styled.section`
  .btn-discard {
    background: var(--test-blue);
    color: var(--space-cadet);
  }
  .btn-save {
    background: var(--med-bright-blue);
    color: white;
  }
  .edit-profile-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 8rem;
  }
  .edit-profile-heading {
    width: 25vw;
    letter-spacing: 0.06rem;
  }
  .edit-profile-name {
    // text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 3rem;
    font-family: "Roboto Condensed", sans-serif;
    color: rgb(80, 80, 80);
    margin-bottom: 0.8rem;
  }
  .edit-profile-main {
    padding: 1rem;
  }
`;

export default Wrapper;
