import Wrapper from "../../assets/wrappers/FormLoginW";
import FormRow from "./FormRow";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function LoginForm({
  handleChange,
  handleLogin,
  email,
  password,
  hiddenPassword,
  requesting,
}) {
  return (
    <Wrapper>
      <section className="form-main">
        {" "}
        <form className="form form-login" onSubmit={handleLogin}>
          <Link to="/" className=" link">
            <Logo logoClass="logo-payment" iconClass="icon-payment" />
          </Link>
          <h1 className="form-header">
            Login{" "}
            <p className="p-bottom">
              Not yet a member?{" "}
              <span className="span-login">
                <Link to="/register" className="link span-login">
                  register
                </Link>
              </span>
            </p>
          </h1>
          <FormRow
            id="email"
            name="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
          <FormRow
            id="password"
            name="password"
            type="text"
            placeholder="password"
            value={password}
            onChange={handleChange}
            classNames="password"
          />
          <button className="btn btn-register" disabled={requesting}>
            login
          </button>
        </form>
      </section>
    </Wrapper>
  );
}
