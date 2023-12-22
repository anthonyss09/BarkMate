import styled from "styled-components";

const Wrapper = styled.body`
  .icon-bars {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  .icon-bars:hover {
    cursor: pointer;
  }
  .img-venmo {
    width: 288px;
    height: 60vh;
  }
  .payment-llc {
    text-align: center;
  }

  .payment-page-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .payment-page-header {
    letter-spacing: 0.05rem;
    font-size: 1rem;
    text-align: center;
  }
  .payment-page-main {
    width: 100vw;
    // height: 100vw;
    padding-top: 2rem;
  }

  @media (max-width: 400px) {
    .img-venmo {
      width: 288px;
      height: 55vh;
    }
    .payment-page-header {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
