import styled from "styled-components";

const Wrapper = styled.section`
  .profile-blurbs-about {
    font-size: 0.6rem;
    color: var(--grey-60);
    padding: 0.6rem;
    padding-left: 0.8rem;
  }
  .blurb {
    width: 90vw;
    display: flex;
    align-items: center;
    padding: 0.6rem;
    border: 4px solid var(--grey-240);
    margin: 0.6rem 0;
    background: white;
  }
  .btn-blurb {
    width: 10rem;
    background: none;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--charcoal);
    background: white;
    border-radius: 0;
  }
  .btn-blurb:hover {
    color: var(--space-cadet);
    background: white;
  }
  .btn-paw {
    color: var(--charcoal);
  }
  .profile-blurb-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 1rem;
  }
  .profile-blurbs-heading {
    margin: 0.6rem;
    margin-bottom: 0.8rem;
    text-align: center;
    color: black;
    font-size: 1.2rem;
    letter-spacing: 0.02rem;
    font-weight: 500;
    font-style: italic;
  }
  .profile-blurbs-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
  .profile-name {
    margin: 0;
    font-size: 0.8rem;
  }
  .profile-pic {
    height: 70px;
    width: 70px;
    border-radius: 100px;
  }
  .second-name {
    margin-left: 36vw;
  }

  @media (min-width: 500px) {
    .about {
      font-size: 0.8rem;
    }
    .profile-name {
      font-size: 1rem;
    }
    .second-name {
      margin-left: 46vw;
    }
  }
`;

export default Wrapper;
