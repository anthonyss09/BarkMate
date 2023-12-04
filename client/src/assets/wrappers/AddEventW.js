import styled from "styled-components";

const Wrapper = styled.aside`
  select {
    width: 70%;
    height: 3.4rem;
    border: 1px solid rgb(195, 195, 195);
    border-radius: 0.3rem;
    box-sizing: border-box;
    max-width: 14.4rem;
  }
  label {
    color: rgb(80, 80, 80);
    font-weight: 600;
    width: 25vw;
    min-width: 5rem;
    width: 17vw;
    font-size: 0.9rem;
    margin-right: auto;
  }
  .beat-loader {
    position: fixed;
  }
  .label-note {
    width: min-content;
    padding-bottom: 0.2rem;
  }
  .add-date-row {
    width: 100%;
    display: flex;
    gap: 0.6rem;
    align-items: center;
    border-radius: 2rem;
    font-size: 0.8rem;
  }
  .add-description-row {
    width: 100%;
    display: flex;
    gap: 0.2rem;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 2rem;
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 1rem;
  }
  .add-description-textarea {
    width: 82%;
    border: 1px solid rgb(220, 220, 220);
    border: none;
    border-radius: 0.5rem;
    resize: none;
    font-size: 16px;
    padding: 1rem;
    outline: none;
    background: rgb(244,244,244);
    width: 92%;
    margin-bottom: 1rem;
    background:white;
    font-weight: bold;
  }
  .add-event-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    gap: 0.4rem;
    padding-bottom: 0.8rem;
    padding: 0 1rem;
  }
  .add-event-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    padding: 1rem;
    padding-right: 0;
    box-sizing: border-box;
    // border-top: 10px solid rgb(244, 244, 244);
    // border-top: 10px solid var(--test-blue);
    margin-top: -1rem;
  }
  .add-event-center {
    // max-width: 300px;
    width: 100%;
    justify-self: center;
  }
  .add-event-header {
    // color: var(--federal-blue);
  }
  .add-event-main {
    width: 100vw;
    width: 85vw;
    height: min-content;
    position: fixed;
    top: 4rem;
    right: 2rem;
    border-radius: 3rem;
    background: white;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid rgb(215, 215, 215);
    box-shadow: 5px 2px 5px rgb(80, 80, 80);
    z-index: 8;
    border: 2px solid rgb(80,80,80);
     }
  .add-event-title {
    text-align: center;
    margin-bottom: 1rem;
    padding: 1rem 0;
    letter-spacing: 0.05rem;
     border-radius: 2rem;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: min-content;
    height: 4rem;
    font-size: 1rem;
    padding-right: 1rem;
  }
  .btn-add-event {
    color: white;
    background: var(--med-bright-blue);
    background: var(--test-red);
    align-self: flex-end;
    margin-right: 1rem;
    margin-left: auto;
  }
  .btn-discard-event {
    width: 4rem;
    border: 2px solid black;
    border: 2px solid var(--test-blue);
    background: white;
  
  }
  .date-picker {
  }
  option:first {
    color: rgb(160, 160, 160);
  }
  @media (max-width: 400px) {    
      select {
        width: 10.5rem;
      }
    }
  }
`;

export default Wrapper;
