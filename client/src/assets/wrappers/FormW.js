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
    min-height: 100vh;
}
.form-login {
  min-height: min-content;
  margin: auto 0;
}
.form-checkbox-container {
  margin-bottom: 1rem;
}
.form-checkbox-label {
    font-size: 0.8rem;
    color: rgb(120,120,120)
}
.form-checkbox-row {
  display: flex;
  gap: 0.6rem;
  margin: 0.3rem 0;
}
.form-header {
    width: 20rem;
    margin: 0.4rem 0;
    font-weight: 500;
    font-size: 1.4rem;
    color: black;
    font-family: "Droid Sans",
    font-weight: bold;
}   
.form-textarea {
    border-radius: 1.5rem;
    border: 2px solid var(--grey-240);
    // color: var(--grey-180);
    padding-left: 0.8rem;
    padding-top: 0.6rem;
    background: none;
    resize: none;
    
}
.logo {
    font-size: 1.4rem;
    color: var(--federal-blue);
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;    
}
.form-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}
.form-select {
  width: 90%;
  border: none;
}
.form-select:focus {
  outline: none;
}
.p-bottom {
    color: var(--grey-80);
    margin-bottom: 1rem;
  }
  .profile-image {
    height: 250px;
  }
.span-login {
    color: var(--bark-pink);
}
`;

export default Wrapper;
