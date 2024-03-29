import Wrapper from "../../assets/wrappers/FormLoginW";
import FormRow from "./FormRow";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function LoginForm({
  handleChange,
  handleLogin,
  email,
  password,
  requesting,
}) {
  return (
    <Wrapper onSubmit={handleLogin}>
      <Link to="/" className=" link">
        <Logo logoClass="logo-login" iconClass="icon-payment" />
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
    </Wrapper>
  );
}
