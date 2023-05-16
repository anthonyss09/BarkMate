import Wrapper from "../../assets/wrappers/FormW";
import FormRow from "./FormRow";
import LandingNav from "../../app/LandingNav";
import { IoIosArrowForward } from "react-icons/io";

export default function RegisterOne() {
  return (
    <Wrapper>
      <section className="main ">
        {/* <LandingNav /> */}
        <form className="form">
          <h1 className="logo">BarkMate</h1>

          <div className="steps-container">
            <div className="step">
              <div className="step-circle step-circle-active">1</div>
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

          <h1 className="form-header">
            Create Profile{" "}
            <p className="p-bottom">
              Alreday a member? <span>login</span>
            </p>
          </h1>
          {/* <p className="p-top">
            Tell us about you and start connecting
            <br /> with mates.
          </p> */}

          <FormRow type="text" id="name" name="name" value="name" />

          <FormRow type="text" id="address" name="address" value="address" />
          {/* <FormRow type="text" id="phone" name="phone" value="phone" /> */}
          <FormRow type="text" id="email" name="email" value="email" />
          <FormRow
            type="text"
            id="create password"
            name="create password"
            value="create pasword"
          />
          <FormRow
            type="text"
            id="re-type password"
            name="re-type password"
            value="re-type password"
          />
          <button className="btn btn-register">Next</button>
          {/* <p className="p-bottom">
            Alreday a member? <span>login</span>
          </p> */}
        </form>
      </section>
    </Wrapper>
  );
}
