import Wrapper from "../../assets/wrappers/FormW";
import FormRow from "./FormRow";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import FormSteps from "./FormSteps";
import { selectNewUser } from "./authSlice";
import { useSelector } from "react-redux";
import validator from "validator";
import { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { updateNewUserProp } from "./authSlice";
import { places } from "../../utils/consts";
import AddressInput from "../../components/AddressInput";

export default function RegisterOne({
  handleRegisterOne,
  handleRegisterTwo,
  handleInputChange,
  showRegisterOne,
}) {
  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handlePlaceChanged = async () => {
    try {
      const [place] = await inputRef.current.getPlaces();
      if (place) {
        const long = place.geometry.location.lng();
        const lat = place.geometry.location.lat();

        const address = place.formatted_address;
        dispatch(updateNewUserProp({ id: "address", value: address }));
        dispatch(updateNewUserProp({ id: "location", value: [long, lat] }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <section className="form-main ">
        <form className="form">
          <Link to="/" className=" link">
            <Logo />
          </Link>
          <FormSteps showRegisterOne={showRegisterOne} />
          <h1 className="form-header">
            Create Profile{" "}
            <p className="p-bottom">
              Alreday a member? <span className="span-login">login</span>
            </p>
          </h1>

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
          {/* <div className="form-row form-row-address">
            <label htmlFor="address">address</label>
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              libraries={places}
            >
              <StandaloneSearchBox
                onLoad={(ref) => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
              >
                <input
                  id="address"
                  type="text"
                  className="form-input form-input-address"
                  placeholder="Start typing address."
                />
              </StandaloneSearchBox>
            </LoadScript>
          </div> */}

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
              {
                if (
                  newUser.firstName.length < 1 ||
                  newUser.lastName.length < 1 ||
                  newUser.password.length < 6
                ) {
                  alert("Please complete all fields.");
                  return;
                }
                if (newUser.location.length < 2) {
                  alert("Please enter valid address.");
                  return;
                }
                if (!validator.isEmail(newUser.email)) {
                  alert("Please enter valid email.");
                  return;
                }
                handleRegisterOne();
                handleRegisterTwo();
              }
            }}
          >
            Next
          </button>
        </form>
      </section>
    </Wrapper>
  );
}
