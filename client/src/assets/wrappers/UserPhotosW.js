import styled from "styled-components";

const Wrapper = styled.section`
  .icon-close {
    color: rgb(200, 200, 200);
    margin-right: auto;
    margin-bottom: auto;
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    z-index: 5;
  }
  .icon-close:hover {
    cursor: pointer;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(40, 40, 40, 0.7);
    font-size: 0.8rem;
    color: rgb(244, 244, 244);
    display: grid;
    place-items: center;
    visibility: hidden;
  }
  .user-photo-container {
    position: relative;
    margin-bottom: 0.6rem;
    max-height: 180px;
  }
  .user-photo {
    max-height: 180px;
    width: 30vw;
  }
  .user-photo-carousel {
    max-height: 90vh;
    width: 100vw;
  }
  .user-photo:hover {
    cursor: pointer;
    transition: var(--transition-main);
    transform: scale(1.02);
    box-shadow: var(--shadow-main-light);
  }
  .user-photos-icon-back {
    margin: 0.4rem;
  }
  .user-photos-icon-back:hover {
    cursor: pointer;
  }
  .user-photos-main {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    padding: 0.8rem;
    justify-content: space-between;
    box-sizing: border-box;
    background: white;
  }
  .user-photos-main-carousel {
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0);
  }
`;

export default Wrapper;
