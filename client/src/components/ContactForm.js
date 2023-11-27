import Wrapper from "../assets/wrappers/FormContactW.js";
import FormRow from "../features/auth/FormRow.js";
import { useState, useEffect } from "react";
import Logo from "../components/Logo.js";
import { Link } from "react-router-dom";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import { displayAlert, clearAlert } from "../features/alerts/alertsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../features/alerts/Alert";
import { selectAlertsInfo } from "../features/alerts/alertsSlice";

export default function ConctactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);

  const dispatch = useDispatch();

  let { showAlert, alertMessage, alertType } = useSelector(selectAlertsInfo);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    } else if (id === "name") {
      setName(value);
    } else if (id === "message") {
      setMessage(value);
    }
    return;
  };

  const handleSendEmail = async (e) => {
    setSending(true);

    try {
      const response = await axios.post("/api/transports/forward-email", {
        name,
        email,
        message,
      });
      console.log(response);
      dispatch(
        displayAlert({
          alertType: "success",
          alertMessage: response.data.message,
        })
      );
    } catch (error) {
      dispatch(
        displayAlert({
          alertType: "danger",
          alertMessage: error.response.data.message,
        })
      );
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
    setSending(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <section className="form-main">
        {showAlert && (
          <Alert alertMessage={alertMessage} alertType={alertType} />
        )}
        {sending && (
          <div className="alert-container">
            {" "}
            <DotLoader size={85} color="lightBlue" className="beat-loader" />
          </div>
        )}
        <div className="form form-contact">
          <Link to="/dashboard/home" className=" link">
            <Logo logoClass="logo-payment" iconClass="icon-payment" />
          </Link>
          <h1 className="form-header">
            Contact Us
            <p className="p-bottom">
              <span className="span-login">
                <Link to="/register" className="link span-login">
                  Thanks for reaching out!
                </Link>
              </span>
            </p>
          </h1>
          <FormRow
            id="name"
            name="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <FormRow
            id="email"
            name="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
          <div className="form-row">
            <label htmlFor="aboutUs" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows="5"
              value={message}
              placeholder="What's on your mind?"
              className="form-textarea"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-contact" onClick={handleSendEmail}>
            Send email
          </button>
        </div>
      </section>
    </Wrapper>
  );
}
