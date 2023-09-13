import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { places } from "../utils/consts";

export default function AddressInput({
  handlePlaceChanged,
  inputRef,
  userAddress,
}) {
  return (
    <div className="form-row form-row-address">
      <label htmlFor="address" className="form-label">
        Address
      </label>
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
            placeholder={userAddress}
          />
        </StandaloneSearchBox>
      </LoadScript>
    </div>
  );
}
