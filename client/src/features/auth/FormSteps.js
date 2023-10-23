import Wrapper from "../../assets/wrappers/FormSteps";
import { IoIosArrowForward } from "react-icons/io";

export default function FormSteps({
  showRegisterOne,
  showRegisterTwo,
  showRegisterThree,
}) {
  return (
    <Wrapper>
      <div className="steps-container">
        <div className="step">
          <div
            className={`step-circle step-circle-one ${
              showRegisterOne ? "step-circle-active" : ""
            }`}
          >
            1
          </div>
          <div className="step-1">About you</div>
          <div className="step-arrow step-arrow-active">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="step">
          <div
            className={`step-circle step-circle-two ${
              showRegisterTwo ? "step-circle-active" : ""
            }`}
          >
            2
          </div>
          <div className="step-2 ">About pup</div>
          <div className="step-arrow">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="step">
          <div
            className={`step-circle step-circle-three ${
              showRegisterThree ? "step-circle-active" : ""
            }`}
          >
            3
          </div>
          <div className="step-3">Finish up</div>
        </div>
      </div>
    </Wrapper>
  );
}
