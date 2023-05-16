import styled from "styled-components";

const Wrapper = styled.header`
  img {
    width: 40vw;
    margin-top: 2rem;
    margin-left: 2rem;
  }
  p {
    margin: 0;
    color: white;
  }
  .bars {
    position: absolute;
    top: 1.4rem;
    right: 1rem;
    color: var(--grey-240);
  }
  .bone {
    color: var(--space-cadet);
  }
  .center {
    width: 300px;
    height: 40vh;
    position: relative;
    display: grid;
    place-items: center;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    min-height: 40vh;

    background: hsla(42, 72%, 89%, 1);
    background: radial-gradient(
      circle,
      hsla(42, 72%, 89%, 1) 0%,
      hsla(43, 100%, 83%, 1) 100%
    );
    background: -moz-radial-gradient(
      circle,
      hsla(42, 72%, 89%, 1) 0%,
      hsla(43, 100%, 83%, 1) 100%
    );
    background: -webkit-radial-gradient(
      circle,
      hsla(42, 72%, 89%, 1) 0%,
      hsla(43, 100%, 83%, 1) 100%
    );
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F7EBCE", endColorstr="#FFE6A7", GradientType=1 );

    background: var(--grey-248);
    // background: linear-gradient(
    //   90deg,
    //   hsla(213, 32%, 89%, 1) 0%,
    //   hsla(0, 0%, 99%, 1) 100%
    // );

    // background: -moz-linear-gradient(
    //   90deg,
    //   hsla(213, 32%, 89%, 1) 0%,
    //   hsla(0, 0%, 99%, 1) 100%
    // );

    // background: -webkit-linear-gradient(
    //   90deg,
    //   hsla(213, 32%, 89%, 1) 0%,
    //   hsla(0, 0%, 99%, 1) 100%
    // );

    // filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#DAE2EC", endColorstr="#FDFDFD", GradientType=1 );

    // background: var(--lavender-pink);

    // background: hsla(326, 75%, 85%, 1);

    // background: radial-gradient(
    //   circle,
    //   hsla(326, 75%, 85%, 1) 0%,
    //   hsla(0, 0%, 99%, 1) 100%
    // );

    // background: -moz-radial-gradient(
    //   circle,
    //   hsla(326, 75%, 85%, 1) 0%,
    //   hsla(0, 0%, 99%, 1) 100%
    // );

    // background: -webkit-radial-gradient(
    //   circle,
    //   hsla(326, 75%, 85%, 1) 0%,
    //   hsla(0, 0%, 99%, 1) 100%
    // );

    // filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F5BADB", endColorstr="#FDFDFD", GradientType=1 );
  }
  .header-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 18vw;
    background: var(--lavender-pink);
    border: 2px solid var(--grey-248);
    font-weight: bold;
    font-size: 1rem;
  }
  .header-btn:hover {
    background: var(--grey-248);
  }
  .text {
    position: absolute;
  }
  .text-1 {
    top: 5.4rem;
    left: 1.2rem;
    color: var(--federal-blue);
  }
  .text-2 {
    position: static;
    top: 4.4rem;
    left: 9rem;
    margin-bottom: 1.2rem;
  }
  .text-3 {
    bottom: 5rem;
    right: 0.6rem;
    color: white;
    color: var(--space-cadet);
  }
  .day-walk {
    bottom: 3rem;
    left: 2.4rem;
    border: 3px solid white;
  }
  .logo {
    color: var(--space-cadet);
    margin-top: 1rem;
  }
  .moon {
    margin-left: 4rem;
  }
  .night-walk {
    top: 1.8rem;
    right: 2.4rem;
    border: 3px solid var(--space-cadet);
  }
  .sun {
    margin-right: 4.8rem;
  }
  .walk {
    display: grid;
    place-items: center;
    width: 125px;
    height: 16vh;
    position: absolute;
    border-radius: 0.5rem;
  }
`;

export default Wrapper;
