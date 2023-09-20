import styled from "styled-components";

const Wrapper = styled.aside`

  select {
    width: 70%;
    height: 3.4rem;
    border: 1px solid rgb(195, 195, 195);
    border-radius: 0.3rem;
    // margin-left: auto;
    box-sizing: border-box;
    max-width: 14.4rem;
  }
  label {
    color: rgb(80, 80, 80);
    // color: rgb(100, 100, 100);
    font-weight: 600;
    width: 25vw;
    min-width: 5rem;
    width: 17vw;
    font-size: 0.9rem;
    margin-right: auto;
  //   border-bottom: 2px solid rgb(120, 120, 120);
  //  border-bottom: 2px solid rgb(220, 220, 220);

  }
  .beat-loader {
    position: fixed;
  }
  .label-note {
    width: min-content;
    padding-bottom: 0.2rem;
    // border-bottom: 2px solid rgb(120, 120, 120);
    // border-bottom: 2px solid rgb(220, 220, 220);
  }
  .add-date-row {
    width: 100%;
    display: flex;
    // flex-direction: column;
    gap: 0.6rem;
    align-items: center;
    // box-shadow: 5px 2px 5px grey;
    // border: 1px solid rgb(220, 220, 220);
    border-radius: 2rem;
    // padding: 0.6rem 0.8rem;
    // background: rgb(244, 244, 244);
    // width: min-content;
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
    // gap: 1rem;
    // padding: 0 3rem;
    // border-bottom: 2px solid rgb(220, 220, 220);
    // border-bottom: 3px solid black;
    padding-bottom: 0.8rem;
    // border-bottom: 2px solid rgb(180,180,180);
    padding: 0 1rem;
  }
  .add-event-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    // flex-direction: column;
    // gap: 1rem;
    padding: 0 2rem;
    padding: 1rem;
    padding-right: 0;
    box-sizing: border-box;
    // border-bottom: 10px solid rgb(244, 244, 244);
    border-top: 10px solid rgb(244, 244, 244);
    // margin-top: -2rem;
    margin-top: -1rem;
  }
  .add-event-header {
    font-size: 1.3rem;
    font-size: 1.6rem;

    // width: 90%;
    width: 100%;
    // margin-top: 3rem;
    // margin-bottom: 1rem;
    // height: 6.2rem;
    height: 6rem;
    // border-radius: 2rem 2rem 0 0;
    color: var(--federal-blue);
    color: black;
    padding: 0.5rem 0.7rem;
    box-sizing: border-box;
    letter-spacing: 0.2rem;
    color: rgb(60, 60, 60);
    background: rgb(244, 244, 244);
    background: var(--test-blue);
    display: grid;
    place-items: center;
    // border-bottom: 3px solid black;
    // border-bottom: 2px solid rgb(220, 220, 220);
    // border-bottom: 2px solid rgb(244,244,244);
    padding: 2rem;
    background: var(--med-bright-blue);
    background: white;
    background: var(--test-blue);
    // background: rgb(244,244,244);
    color: var(--med-bright-blue);
    // color: white;
    color: black;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .add-event-main {
    // height: 90vh;
    // height: 80vh;
    height: min-content;
    // height: 100vh;
    // padding: 1rem;
    // max-width: 360px;
    // width: 85vw;
    width: 90vw;
    // width: 80vw;
    // height: 100vh;
    position: fixed;
    top: 2rem;
    right: 1.4rem;
    // bottom: 2rem;
    // left: 2rem;
    // top: 2rem;
    // right: 2rem;
    // top: 0;
    // right: 0;
    background: white;
    z-index: 4;
    display: flex;
    flex-direction: column;
    // gap: 3rem;
    box-sizing: border-box;
    border: 1px solid rgb(215, 215, 215);
    // border: 2px solid rgb(180,180,180);
    border-radius: 2rem;
    // border-radius: 2rem;
    box-shadow: 5px 2px 5px grey;
    z-index: 8;
     border-left: 1px solid rgb(220, 220, 220);
    box-shadow: -1px 2px 100vw grey;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 45%;
    width: min-content;
    // box-shadow: 5px 2px 5px grey;
    height: 4rem;
    font-size: 1rem;
    padding-right: 1rem;
  }
  .btn-add-event {
    color: white;
    background: var(--med-bright-blue);
    background: var(--test-red);
    align-self: flex-end;
    // height: 3rem;
    // margin-right: 1rem;
    // margin: 0 1rem;
    margin-right: 1rem;
    margin-left: auto;
  }
  .btn-discard-event {
    color: rgb(180, 180, 180);
    color: black;
    color: rgb(80, 80, 80);
    // color: rgb(100, 100, 100);
    // background: none;
    background: rgb(244, 244, 244);
    margin-left: 1rem;
    width: 10rem;
    font-size: 0.9rem;
    color: black;
    margin: 0;
    margin: 1rem 0 0 1rem;
    width: 2rem;
    height: 2rem;
    background: white;
    // border: 1px solid black;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-size: 1.4rem;
    // font-weight: 400;
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
      .add-description-textarea {
            // margin-top: -2rem;

      }
      .add-event-buttons {
        // margin-top: -4rem;
      }
      .add-event-main {
        top: 2rem;
        right: 1.2rem;
      }
    }
  }
`;

export default Wrapper;
