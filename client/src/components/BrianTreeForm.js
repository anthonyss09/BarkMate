import { useEffect, useState } from "react";
import braintree from "braintree-web";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/BrainTreeFormW";
import Logo from "./Logo";
import venmoButtonSmall from "../assets/images/blue_venmo_button_320x48.svg";
import { selectAlertsInfo } from "../features/alerts/alertsSlice";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../features/alerts/Alert";
import { displayAlert, clearAlert } from "../features/alerts/alertsSlice";
import DotLoader from "react-spinners/DotLoader";
import FormRow from "../features/auth/FormRow";

export default function BraintreeDropIn(props) {
  const Navigate = useNavigate();

  let { showAlert, alertMessage, alertType } = useSelector(selectAlertsInfo);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   let deviceData;
  //   const venmoButton = document.querySelector(".venmo-button");
  //   const formPayment = document.querySelector("#form-payment");
  //   const button = document.querySelector(".bt-drop-in-submit-button");

  //   braintree.client.create(
  //     {
  //       authorization: process.env.REACT_APP_BRAIN_TREE_AUTH,
  //       venmo: {},
  //     },
  //     (err, clientInstance) => {
  //       const options = {
  //         client: clientInstance,
  //         fields: {
  //           number: {
  //             container: "#card-number",
  //             placeholder: "4111 1111 1111 1111",
  //           },
  //           cvv: {
  //             container: "#cvv",
  //             placeholder: "123",
  //           },
  //           expirationDate: {
  //             container: "#expiration-date",
  //             placeholder: "10/2022",
  //           },
  //         },
  //       };
  //       braintree.hostedFields.create(
  //         options,
  //         (hostedFieldErr, hostedFieldInstance) => {
  //           if (hostedFieldErr) {
  //             console.log(hostedFieldErr);
  //             return;
  //           }

  //           button.removeAttribute("disabled");

  //           formPayment.addEventListener(
  //             "submit",
  //             (event) => {
  //               event.preventDefault();
  //               setIsLoading(true);

  //               hostedFieldInstance.tokenize((tokenizeErr, payload) => {
  //                 if (tokenizeErr) {
  //                   console.log(tokenizeErr);
  //                   setIsLoading(false);
  //                   dispatch(
  //                     displayAlert({
  //                       alertMessage: "Check all fields.",
  //                       alertType: "danger",
  //                     })
  //                   );
  //                   setTimeout(() => {
  //                     dispatch(clearAlert());
  //                     Navigate("/payment");
  //                   }, 3000);
  //                   return;
  //                 }
  //                 //send nonce to server payload.nonce
  //                 axios
  //                   .post("/api/payments/checkout", {
  //                     paymentMethodNonce: payload.nonce,
  //                     amount: "10.00",
  //                     device_data: deviceData,
  //                   })
  //                   .then((result) => {
  //                     if (result.data.content.success) {
  //                       console.log("success");
  //                       setIsLoading(false);
  //                       dispatch(
  //                         displayAlert({
  //                           alertMessage: "Success! Thank you for the Tip!",
  //                           alertType: "success",
  //                         })
  //                       );
  //                       setTimeout(() => {
  //                         dispatch(clearAlert());
  //                         Navigate("/dashboard/home");
  //                       }, 3000);
  //                     } else {
  //                       console.log(result);
  //                       setIsLoading(false);
  //                       dispatch(
  //                         displayAlert({
  //                           alertMessage:
  //                             "Something went wrong. Payment not processed.",
  //                           alertType: "danger",
  //                         })
  //                       );
  //                       setTimeout(() => {
  //                         dispatch(clearAlert());
  //                         Navigate("/payment");
  //                       }, 3000);
  //                     }
  //                   });
  //               });
  //             },
  //             false
  //           );
  //         }
  //       );

  //       braintree.venmo.create(
  //         {
  //           client: clientInstance,
  //           allowDesktop: true,
  //           mobileWebFallBack: true,
  //           allowDesktopWebLogin: true,
  //           paymentMethodUsage: "multi_use",
  //           totalAmount: "10.00",
  //           profileId: "1953896702662410263",
  //         },
  //         (venmoInstanceErr, venmoInstance) => {
  //           if (venmoInstanceErr) {
  //             console.log(venmoInstanceErr);
  //             return;
  //           }

  //           if (!venmoInstance.isBrowserSupported()) {
  //             console.log("browser does not support venmo");
  //             return;
  //           }

  //           displayVenmoButton(venmoInstance);

  //           if (venmoInstance.hasTokenizationResult()) {
  //             setIsLoading(true);
  //             venmoInstance.tokenize((err, payload) => {
  //               if (err) {
  //                 handleVenmoError(err);
  //                 setIsLoading(false);
  //               } else {
  //                 //send payload.nonce to server
  //                 handleVenmoSuccess(payload);
  //                 setIsLoading(false);
  //               }
  //             });
  //             return;
  //           }
  //         }
  //       );

  //       braintree.dataCollector.create(
  //         {
  //           client: clientInstance,
  //           paypal: true,
  //         },
  //         function (dataCollectorErr, dataCollectorInstance) {
  //           if (dataCollectorErr) {
  //             // Handle error in creation of data collector.
  //             console.log(dataCollectorErr);
  //             return;
  //           }

  //           // At this point, you should access the dataCollectorInstance.deviceData value and provide it
  //           // to your server, e.g. by injecting it into your form as a hidden input.
  //           deviceData = dataCollectorInstance.deviceData;
  //         }
  //       );
  //     }
  //   );

  //   function handleVenmoSuccess(payload) {
  //     axios
  //       .post("/api/payments/checkout", {
  //         paymentMethodNonce: payload.nonce,
  //         amount: "10.00",
  //         device_data: deviceData,
  //         profileId: "1953896702662410263",
  //       })
  //       .then((result) => {
  //         if (result.data.content.success) {
  //           console.log("success");
  //           dispatch(
  //             displayAlert({
  //               alertMessage: "Success! Thank you for the Tip!",
  //               alertType: "success",
  //             })
  //           );
  //           setTimeout(() => {
  //             setIsLoading(false);
  //             dispatch(clearAlert());
  //             Navigate("/dashboard/home");
  //           }, 3000);
  //         } else {
  //           console.log(result);
  //           console.log("error error error");
  //           dispatch(
  //             displayAlert({
  //               alertType: "danger",
  //               alertMessage: "Something went wrong.",
  //             })
  //           );
  //           setTimeout(() => {
  //             setIsLoading(false);
  //             dispatch(clearAlert());
  //             Navigate("/payment");
  //           }, 3000);
  //         }
  //       });
  //     // Send payload.nonce to your server.
  //     console.log("Got a payment method nonce:", payload.nonce);
  //     // Display the Venmo username in your checkout UI.
  //     console.log("Venmo user:", payload.details.username);
  //   }

  //   function displayVenmoButton(venmoInstance) {
  //     venmoButton.style.display = "block";
  //     venmoButton.addEventListener("click", () => {
  //       setIsLoading(true);

  //       venmoButton.disabled = true;
  //       console.log("clicked");
  //       venmoInstance.tokenize((err, payload) => {
  //         venmoButton.removeAttribute("disabled");

  //         if (err) {
  //           handleVenmoError(err);
  //         } else {
  //           handleVenmoSuccess(payload);
  //         }
  //       });
  //     });
  //   }

  //   function handleVenmoError(err) {
  //     if (err.code === "VENMO_CANCELED") {
  //       console.log("App is not available or user aborted payment flow");
  //     } else if (err.code === "VENMO_APP_CANCELED") {
  //       console.log("User canceled payment flow");
  //     } else {
  //       console.error("An error occurred:", err.message);
  //     }
  //   }
  // }, [Navigate, dispatch]);

  return (
    <Wrapper>
      <div className="unavailable">Tipping feature coming soon</div>
      {isLoading && (
        <div className="alert-container">
          {" "}
          <DotLoader size={85} color="lightBlue" className="beat-loader" />
        </div>
      )}
      {showAlert && <Alert alertMessage={alertMessage} alertType={alertType} />}
      <form id="form-payment" className="form-main">
        {" "}
        <div className="bt-drop-in-main form form-payment">
          <Link to="/dashboard/home" className=" link link-home">
            <Logo logoClass="logo-payment" iconClass="icon-payment" />
          </Link>
          <h1 className="form-header payment-header">
            <p className="p-pink"> Thank you!</p>
            <p className="p-bottom">
              {" "}
              Enter tip amount then choose method.
              <br />
            </p>
          </h1>

          <FormRow
            id="tip-amount"
            name="Tip amount"
            type="text"
            placeholder="$5.00"
          />

          <div
            type="button"
            className="venmo-button btn-venmo-container"
            disabled
          >
            <img
              src={venmoButtonSmall}
              className="btn btn-venmo"
              alt="venmo button"
            />
          </div>
          <div className="text-cadet text-center">
            <p className="p-center">Or</p>
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="card-number">
              Card Number
            </label>
            <div
              className="form-input"
              type="text"
              id="card-number"
              name="Card number"
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="cvv">
              Cvv
            </label>
            <div className="form-input" type="text" id="cvv" name="Cvv" />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="expiration-date">
              Expiration
            </label>
            <div
              className="form-input"
              type="text"
              id="expiration-date"
              name="Expiration"
            />
          </div>

          <button className="bt-drop-in-submit-button btn btn-payment" disabled>
            Submit Card
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
