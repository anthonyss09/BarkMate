import styled from "styled-components";

const Wrapper = styled.main`
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
    margin-top: 2rem;
  }
  .payment-page-header {
    letter-spacing: 0.05rem;
    font-size: 1rem;
    text-align: center;
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
