import styled from "styled-components";

const Wrapper = styled.aside`

p {
  color: var(--grey-180);
  font-size: 0.8rem;
   max-width: 60vw;
}
.p-top {
  margin-bottom: 1rem;
}
  span {
    color: var(--bark-pink);
  }
  .btn-register {
    margin-bottom: 1rem;
    width: 10rem;
    height: 4rem;
    border-radius: 3rem;
    color: white;
    background: var(--grey-60);
  }
  .btn-register:hover {
    background: var(--space-cadet);
    color: white;
  }
  .footer {
    height: 3rem;
    width: 100vw;
    border-top: 2px solid var(--grey-240);
  }
  .form {
    align-items: center;
    padding-bottom: 2rem;
    background: white;
    font-family: 'Roboto', sans-serif;
    border-radius: 1rem;
    padding: 1rem 2rem 2rem 2rem;

  }

  // .form-input {
  //   border-radius: 1.5rem;
  //   height: 2rem;
  //   border: 2px solid var(--grey-240);
  //   color: var(--grey-220);
  //   padding-left: 0.8rem;
  //   background: none;
  //   font-size: 16px;
  // }
  // .form-label {
  //   font-weight: bold;
  //   font-size: 0.8rem;
  //   color: var(--grey-100);
  // }
  // .form-row {
  //   width: 20rem;
  //   display: flex;
  //   flex-direction: column;
  //   gap: 0.4rem;
  //   margin-bottom: 1.2rem;
  //   position: relative;
  // }
  .form-header {
    width: 20rem;
    margin: 0.4rem 0;
    font-weight: 500;
    font-size: 1.4rem;
    color: black;
    font-family: "Droid Sans",
    font-weight: bold;
}
    
  }
  .form-textarea {
    border-radius: 0.5rem;
    border: 2px solid var(--grey-240);
    color: var(--grey-180);
    padding-left: 0.8rem;
    padding-top: 0.6rem;
    background: none;
  }
  .logo {
    font-size: 1rem;
    color: var(--federal-blue);
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;    
  }
  .main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
 }
  .p-bottom {
    color: var(--grey-80);
    margin-bottom: 1rem;
  }
  .step {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--grey-180);
  }
  .step-arrow {
    margin-top: 0.2rem;
  }
  .step-arrow-active {
    color: var(--grey-60);

  }
  .steps-container {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem ;
  }
  .step-active {color: black;}
  .step-circle {
    color: white;
    background: var(--grey-240);
    padding: 0.2rem 0.4rem;
    border-radius: 2rem;
    font-size: 2rem;
  }

  .step-circle-two {
    background: var(--sunglow)
  }

  .step-circle-three {
    background: var(--crystaly-green);
  }

  .step-circle-active {
    background: var(--crystal-blue-green);
  }
`;

export default Wrapper;
