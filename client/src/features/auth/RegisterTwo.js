import Wrapper from "../../assets/wrappers/FormRegisterW";
import FormRow from "./FormRow";
import { useSelector } from "react-redux";
import { selectNewUser } from "./authSlice";
import FormDropDown from "./FormDropDown";

export default function RegisterTwo({
  handleRegisterTwo,
  handleRegisterThree,
  handleInputChange,
}) {
  const newUser = useSelector(selectNewUser);
  return (
    <Wrapper>
      <form className="form">
        <div className="form-header">About pup</div>
        <FormRow
          type="text"
          id="dogName"
          name="Pup's name"
          placeholder="Pup's name"
          onChange={handleInputChange}
        />
        <FormRow
          type="text"
          id="breed"
          name="breed"
          placeholder="breed"
          onChange={handleInputChange}
        />
        <FormDropDown
          options={["0-50 lbs", "50-100 lbs", "100+ lbs"]}
          label="weight"
          id="weight"
          handleInputChange={handleInputChange}
        />
        <FormDropDown
          options={["low energy", "medium energy", "high energy"]}
          label="energy level"
          id="energyLevel"
          handleInputChange={handleInputChange}
        />
        <button
          type="button"
          className="btn btn-register"
          onClick={() => {
            if (
              newUser.dogName.length < 1 ||
              newUser.breed.length < 1 ||
              newUser.weight.length < 1 ||
              newUser.energyLevel.length < 1
            ) {
              alert("Please complete all fields.");
              return;
            }
            handleRegisterTwo();
            handleRegisterThree();
          }}
        >
          Save info
        </button>
      </form>
    </Wrapper>
  );
}
