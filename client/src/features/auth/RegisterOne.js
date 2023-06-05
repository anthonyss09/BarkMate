import Wrapper from "../../assets/wrappers/FormW";
import FormRow from "./FormRow";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import FormSteps from "./FormSteps";

export default function RegisterOne({ handleRegisterOne, handleRegisterTwo }) {
  return (
    <Wrapper>
      <section className="form-main ">
        <form className="form">
          <Link to="/" className=" link">
            <Logo />
          </Link>
          <FormSteps />
          <h1 className="form-header">
            Create Profile{" "}
            <p className="p-bottom">
              Alreday a member? <span>login</span>
            </p>
          </h1>

          <FormRow type="text" id="name" name="name" value="name" />

          <FormRow type="text" id="address" name="address" value="address" />

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
          <button
            className="btn btn-register"
            onClick={() => {
              handleRegisterOne();
              handleRegisterTwo();
            }}
          >
            Next
          </button>
        </form>
      </section>
    </Wrapper>
  );
}
