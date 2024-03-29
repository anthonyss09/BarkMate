import Wrapper from "../../assets/wrappers/FormRegisterW";
import FormRow from "./FormRow";
import { Link } from "react-router-dom";
import { selectNewUser } from "./authSlice";
import { useSelector } from "react-redux";
import validator from "validator";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateNewUserProp } from "./authSlice";
import AddressInput from "../../components/AddressInput";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";

export default function RegisterOne({
  handleRegisterOne,
  handleRegisterTwo,
  handleInputChange,
}) {
  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handlePlaceChanged = async () => {
    try {
      const [place] = await inputRef.current.getPlaces();
      const city = place.address_components[2].long_name;
      if (place) {
        const long = place.geometry.location.lng();
        const lat = place.geometry.location.lat();

        const address = place.formatted_address;
        dispatch(updateNewUserProp({ id: "address", value: address }));
        dispatch(updateNewUserProp({ id: "location", value: [long, lat] }));
        dispatch(updateNewUserProp({ id: "city", value: city }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <form className="form">
        <div className="form-header">
          <p className="p-top">Create Profile</p>
          <p className="p-bottom">
            Alreday a member?{" "}
            <Link to="/login" className="span-login link">
              login
            </Link>
          </p>
        </div>

        <FormRow
          type="text"
          id="firstName"
          name="first name"
          placeholder="first name"
          onChange={handleInputChange}
        />
        <FormRow
          type="text"
          id="lastName"
          name="last name"
          placeholder="last name"
          onChange={handleInputChange}
        />
        <AddressInput
          inputRef={inputRef}
          handlePlaceChanged={handlePlaceChanged}
        />

        <FormRow
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
        />
        <FormRow
          type="text"
          id="password"
          name="create password"
          placeholder="create pasword"
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="btn btn-register"
          onClick={() => {
            if (
              newUser.firstName.length < 1 ||
              newUser.lastName.length < 1 ||
              newUser.password.length < 6
            ) {
              dispatch(
                displayAlert({
                  alertType: "danger",
                  alertMessage:
                    "Please check all required fields. Password must be atleast 6 characters in length.",
                })
              );
              setTimeout(() => {
                dispatch(clearAlert());
              }, 3000);
              return;
            }
            if (newUser.location.length < 2) {
              dispatch(
                displayAlert({
                  alertType: "danger",
                  alertMessage: "Please enter valid address.",
                })
              );
              setTimeout(() => {
                dispatch(clearAlert());
              }, 3000);
              return;
            }
            if (!validator.isEmail(newUser.email)) {
              dispatch(
                displayAlert({
                  alertType: "danger",
                  alertMessage: "Please enter valid email.",
                })
              );
              setTimeout(() => {
                dispatch(clearAlert());
              }, 3000);
              return;
            }
            handleRegisterOne();
            handleRegisterTwo();
          }}
        >
          Next
        </button>
      </form>
    </Wrapper>
  );
}
