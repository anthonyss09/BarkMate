import Wrapper from "../../assets/wrappers/FormW";
import FormRow from "./FormRow";
import Logo from "../../components/Logo";
import FormSteps from "./FormSteps";
import { Link } from "react-router-dom";

export default function RegisterTwo({
  handleRegisterTwo,
  handleRegisterThree,
}) {
  return (
    <Wrapper>
      <section className="main ">
        <form className="form">
          <Link to="/" className=" link">
            <Logo />
          </Link>
          <FormSteps />
          <h1 className="form-header">Finish profile</h1>
          <div className="form-row">
            <label for="AboutUs" className="form-label">
              About us
            </label>
            <textarea
              id="AboutUs"
              name="About us"
              rows="5"
              placeholder="Introduce you and pup!"
              className="form-textarea"
            />
          </div>
          <FormRow
            type="text"
            id="Time needed"
            name="Time needed"
            value="Time needed"
          />
          <FormRow
            type="text"
            id="Time available"
            name="Time available"
            value="Time available"
          />
          <FormRow
            type="text"
            id="Social media links"
            name="Social media links"
            value="Social media links"
          />
          <button
            className="btn btn-register"
            onClick={() => {
              handleRegisterTwo();
              handleRegisterThree();
            }}
          >
            Save info
          </button>
        </form>
      </section>
    </Wrapper>
  );
}
