import Wrapper from "../assets/wrappers/FormContactW.js";
import FormRow from "../features/auth/FormRow.js";
import { useState } from "react";
import Logo from "../components/Logo.js";
import { Link } from "react-router-dom";

export default function ConctactForm() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else {
    }
  };
  return (
    <Wrapper>
      <section className="form-main">
        <div className="form form-contact">
          <Link to="/" className=" link">
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
            id="Name"
            name="Name"
            type="text"
            placeholder="Name"
            value={email}
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
              About us
            </label>
            <textarea
              id="aboutUs"
              name="About us"
              rows="5"
              placeholder="What's on your mind?"
              className="form-textarea"
            />
          </div>
          <button className="btn btn-contact">Send email</button>
        </div>
      </section>
    </Wrapper>
  );
}
