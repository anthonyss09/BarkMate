import Wrapper from "../../assets/wrappers/FormW";
import FormRow from "./FormRow";
import FormSteps from "./FormSteps";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function RegisterTwo({
  handleRegisterTwo,
  handleRegisterThree,
}) {
  return (
    <Wrapper>
      <section className="form-main ">
        <form className="form">
          <Link to="/" className=" link">
            <Logo />
          </Link>
          <FormSteps />
          <h1 className="form-header">About pup</h1>
          <FormRow
            type="text"
            id="Pup's name"
            name="Pup's name"
            value="Pup's name"
          />
          <FormRow type="text" id="Breed" name="Breed" value="Breed" />
          <FormRow type="text" id="Weight" name="Weight" value="Weight" />
          <FormRow
            type="text"
            id="Energy level"
            name="Energy level"
            value="Energy level"
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
        <div className="footer"></div>
      </section>
    </Wrapper>
  );
}
