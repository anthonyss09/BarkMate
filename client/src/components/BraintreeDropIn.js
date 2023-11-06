import { useEffect, useState } from "react";
import dropin from "braintree-web-drop-in";
import braintree from "braintree-web";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/FormW";
import Logo from "./Logo";
import venmoButtonSmall from "../assets/images/blue_venmo_button_320x48.svg";
import { selectAlertsInfo } from "../features/alerts/alertsSlice";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../features/alerts/Alert";
import { displayAlert, clearAlert } from "../features/alerts/alertsSlice";
import DotLoader from "react-spinners/DotLoader";

export default function BraintreeDropIn(props) {
  const Navigate = useNavigate();

  let { showAlert, alertMessage, alertType } = useSelector(selectAlertsInfo);

  const [isLoading, setIsLoading] = useState(false);

  // const [deviceData, setDeviceData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let deviceData;
    const venmoButton = document.querySelector(".venmo-button");
    const formPayment = document.querySelector("#form-payment");
    const button = document.querySelector(".bt-drop-in-submit-button");

    braintree.client.create(
      {
        authorization: process.env.BRAIN_TREE_AUTH,
        venmo: {},
      },
      (err, clientInstance) => {
        const options = {
          client: clientInstance,
          fields: {
            number: {
              container: "#card-number",
              placeholder: "4111 1111 1111 1111",
            },
            cvv: {
              container: "#cvv",
              placeholder: "123",
            },
            expirationDate: {
              container: "#expiration-date",
              placeholder: "10/2022",
            },
          },
        };
        braintree.hostedFields.create(
          options,
          (hostedFieldErr, hostedFieldInstance) => {
            if (hostedFieldErr) {
              console.log(hostedFieldErr);
              return;
            }

            button.removeAttribute("disabled");

            formPayment.addEventListener(
              "submit",
              (event) => {
                event.preventDefault();

                hostedFieldInstance.tokenize((tokenizeErr, payload) => {
                  if (tokenizeErr) {
                    console.log(tokenizeErr);
                    return;
                  }
                  //send nonce to server payload.nonce
                  axios
                    .post("/api/payments/checkout", {
                      paymentMethodNonce: payload.nonce,
                      amount: "10.00",
                      device_data: deviceData,
                    })
                    .then((result) => {
                      if (result.data.content.success) {
                        console.log("success");
                        Navigate("/dashboard/home");
                      } else {
                        console.log(result);
                        console.log("error error error");
                      }
                    });
                });
              },
              false
            );
          }
        );

        braintree.venmo.create(
          {
            client: clientInstance,
            allowDesktop: true,
            mobileWebFallBack: true,
            allowDesktopWebLogin: true,
            paymentMethodUsage: "multi_use",
            totalAmount: "10.00",
            profileId: "1953896702662410263",
          },
          (venmoInstanceErr, venmoInstance) => {
            if (venmoInstanceErr) {
              console.log(venmoInstanceErr);
              return;
            }

            if (!venmoInstance.isBrowserSupported()) {
              console.log("browser does not support venmo");
              return;
            }

            displayVenmoButton(venmoInstance);

            if (venmoInstance.hasTokenizationResult()) {
              setIsLoading(true);
              venmoInstance.tokenize((err, payload) => {
                if (err) {
                  handleVenmoError(err);
                  setIsLoading(false);
                } else {
                  //send payload.nonce to server
                  handleVenmoSuccess(payload);
                  setIsLoading(false);
                }
              });
              return;
            }
          }
        );

        braintree.dataCollector.create(
          {
            client: clientInstance,
            paypal: true,
          },
          function (dataCollectorErr, dataCollectorInstance) {
            if (dataCollectorErr) {
              // Handle error in creation of data collector.
              console.log(dataCollectorErr);
              return;
            }

            // At this point, you should access the dataCollectorInstance.deviceData value and provide it
            // to your server, e.g. by injecting it into your form as a hidden input.
            deviceData = dataCollectorInstance.deviceData;
          }
        );
      }
    );

    function handleVenmoSuccess(payload) {
      axios
        .post("/api/payments/checkout", {
          paymentMethodNonce: payload.nonce,
          amount: "10.00",
          device_data: deviceData,
          profileId: "1953896702662410263",
        })
        .then((result) => {
          if (result.data.content.success) {
            console.log("success");
            dispatch(
              displayAlert({
                alertMessage: "Success! Thank you for the Tip!",
                alertType: "success",
              })
            );
            setTimeout(() => {
              setIsLoading(false);
              dispatch(clearAlert());
              Navigate("/payment");
            }, 3000);
          } else {
            console.log(result);
            console.log("error error error");
            dispatch(
              displayAlert({
                alertType: "danger",
                alertMessage: "Something went wrong.",
              })
            );
            setTimeout(() => {
              setIsLoading(false);
              dispatch(clearAlert());
              Navigate("/payment");
            }, 3000);
          }
        });
      // Send payload.nonce to your server.
      console.log("Got a payment method nonce:", payload.nonce);
      // Display the Venmo username in your checkout UI.
      console.log("Venmo user:", payload.details.username);
    }

    function displayVenmoButton(venmoInstance) {
      venmoButton.style.display = "block";
      venmoButton.addEventListener("click", () => {
        setIsLoading(true);

        venmoButton.disabled = true;
        console.log("clicked");
        venmoInstance.tokenize((err, payload) => {
          venmoButton.removeAttribute("disabled");

          if (err) {
            handleVenmoError(err);
          } else {
            handleVenmoSuccess(payload);
          }
        });
      });
    }

    function handleVenmoError(err) {
      if (err.code === "VENMO_CANCELED") {
        console.log("App is not available or user aborted payment flow");
      } else if (err.code === "VENMO_APP_CANCELED") {
        console.log("User canceled payment flow");
      } else {
        console.error("An error occurred:", err.message);
      }
    }
  }, []);

  return (
    <Wrapper>
      {showAlert && <Alert alertMessage={alertMessage} alertType={alertType} />}
      <form id="form-payment" className="form-main">
        {" "}
        <div className="bt-drop-in-main form form-payment">
          {/* <div className="bt-drop-in-checkout-message"></div>
      <div id="dropin-container" className="bt-drop-in-container"></div> */}
          <Logo logoClass="logo-payment" iconClass="icon-payment" />
          <div className="text-cadet form-heade payment-header">
            Enter tip amount then choose method.
            <br />
            Thank you!
          </div>
          <label htmlFor="tip-amount" className="form-label">
            Tip amount
          </label>
          <input
            id="tip-amount"
            className="card-number form-input form-payment-input"
            placeholder="5.00"
          ></input>

          <div type="button" className="venmo-button btn-venmo-container">
            <img src={venmoButtonSmall} className="btn btn-venmo" />
          </div>
          <div className="text-cadet text-center">
            <p className="p-center">Or</p>
          </div>
          <label htmlFor="card-number" className="form-label">
            Card Number
          </label>
          <input
            id="card-number"
            className="card-number form-input form-payment-input"
            placeholder="4111 1111 1111 1111"
          ></input>
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            id="cvv"
            className="form-input form-payment-input"
            placeholder="123"
          ></input>
          <label htmlFor="expiration-date" className="form-label">
            Expiration Dinput
          </label>
          <input
            id="expiration-date"
            className="form-input form-payment-input"
            placeholder="09/2023"
          ></input>
          <button
            className="bt-drop-in-submit-button btn btn-payment"
            type="submit"
            disabled
          >
            Submit Card
          </button>
          {/* <div className="text-cadet">Thanks for contributing!</div> */}
        </div>
      </form>
    </Wrapper>
  );
}
