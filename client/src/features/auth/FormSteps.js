import Wrapper from "../../assets/wrappers/FormSteps";
import { IoIosArrowForward } from "react-icons/io";

export default function FormSteps() {
  return (
    <Wrapper>
      <div className="steps-container">
        <div className="step">
          <div className="step-circle step-circle-active step-circle-one">
            1
          </div>
          <div className="step-1 step-active">About you</div>
          <div className="step-arrow step-arrow-active">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="step">
          <div className="step-circle step-circle-two">2</div>
          <div className="step-2 ">About pup</div>
          <div className="step-arrow">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="step">
          <div className="step-circle step-circle-three">3</div>
          <div className="step-3">finish up</div>
        </div>
      </div>
    </Wrapper>
  );
}
