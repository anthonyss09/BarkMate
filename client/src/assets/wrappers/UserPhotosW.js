import styled from "styled-components";

const Wrapper = styled.section`
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
  }
  .user-photo {
    // height: 200px;
    // width: 150px;
    max-height: 200px;
    width: 30vw;
    // margin: 0.4rem;
  }
  // .user-photo-container:hover .overlay {
  //   cursor: pointer;
  //   visibility: visible;
  // }
  .user-photo:hover {
    cursor: pointer;
    transition: var(--transition-main);
    // transform: var(--transform-main-scale);
    transform: scale(1.02);
    box-shadow: var(--shadow-main-light);
  }
  .user-photos-main {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    padding: 0.8rem;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;

export default Wrapper;
