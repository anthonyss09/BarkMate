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
          <p
            className={`step-circle step-circle-one ${
              showRegisterOne ? "step-circle-active" : ""
            }`}
          >
            1
          </p>
          <p className="step-1">About you</p>
          <div className="step-arrow step-arrow-active">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="step">
          <p
            className={`step-circle step-circle-two ${
              showRegisterTwo ? "step-circle-active" : ""
            }`}
          >
            2
          </p>
          <p className="step-2 ">About pup</p>
          <div className="step-arrow">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="step">
          <p
            className={`step-circle step-circle-three ${
              showRegisterThree ? "step-circle-active" : ""
            }`}
          >
            3
          </p>
          <p className="step-3">Finish up</p>
        </div>
      </div>
    </Wrapper>
  );
}
