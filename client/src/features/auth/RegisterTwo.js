import Wrapper from "../../assets/wrappers/FormW";
import FormRow from "./FormRow";
import LandingNav from "../../app/LandingNav";

export default function RegisterTwo() {
  return (
    <Wrapper>
      <section className="main ">
        <form className="form">
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
          <button className="btn btn-register">Save info</button>
        </form>
        <div className="footer"></div>
      </section>
    </Wrapper>
  );
}
