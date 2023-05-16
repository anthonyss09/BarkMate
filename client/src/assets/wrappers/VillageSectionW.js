import styled from "styled-components";

const Wrapper = styled.section`
  img {
    width: 98vw;
    width: 35vw;
    padding: 1.8rem;
    border: 2px solid var(--grey-220);
  }
  .image-woman {
    position: absolute;
    right: 2rem;
  }
  .image-man {
    position: absolute;
    left: 2rem;
    top: 14rem;
  }
  .village-center {
    height: 42vh;
    padding: 1rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    margin-top: 4rem;
  }
  .village-main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    font-size: 1.2rem;
    color: var(--grey-80);
    // color: black;
  }
  .text-1 {
    position: absolute;
    left: 3rem;
    top: 10rem;
  }
  .text-2 {
    position: absolute;
    top: 18rem;
    right: 4rem;
  }

  @media (max-width: 400px) {
    img {
      width: 30vw;
    }
    .center {
      height: 35vh;
    }
  }
`;

export default Wrapper;
