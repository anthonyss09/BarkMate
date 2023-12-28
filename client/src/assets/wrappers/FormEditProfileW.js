import styled from "styled-components";

const Wrapper = styled.div`
  .btn-discard {
    width: 100px;
    margin: 1rem auto;
    background: white;
    border: 2px solid rgb(80, 80, 80);
  }
  .btn-save {
    width: 100px;
    margin: 1rem auto;
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
