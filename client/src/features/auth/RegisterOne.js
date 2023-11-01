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
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import Alert from "../alerts/Alert";
import { selectAlertsInfo } from "../alerts/alertsSlice";

export default function RegisterOne({
  handleRegisterOne,
  handleRegisterTwo,
  handleInputChange,
  showRegisterOne,
}) {
  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const alertsInfo = useSelector(selectAlertsInfo);
  console.log(alertsInfo);

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
        {alertsInfo.showAlert && (
          <Alert
            alertMessage={alertsInfo.alertMessage}
            alertType={alertsInfo.alertType}
          />
        )}
        <form className="form">
          <Link to="/" className=" link link-register">
            <Logo logoClass="logo-nav" iconClass="icon-payment" />
          </Link>
          <FormSteps showRegisterOne={showRegisterOne} />
          <h1 className="form-header">
            Create Profile{" "}
            <p className="p-bottom">
              Alreday a member?{" "}
              <Link to="/login" className="span-login link">
                login
              </Link>
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
                  {
                    /* alert("Please complete all fields."); */
                  }
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
