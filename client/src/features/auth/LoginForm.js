import Wrapper from "../../assets/wrappers/FormW";
import FormRow from "./FormRow";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function LoginForm({
  handleChange,
  handleLogin,
  email,
  password,
}) {
  return (
    <Wrapper>
      <section className="form-main" onSubmit={handleLogin}>
        {" "}
        <form className="form form-login">
          <Link to="/" className=" link">
            <Logo />
          </Link>
          <h1 className="form-header">
            Login{" "}
            <p className="p-bottom">
              Not yet a member? <span className="span-login">register</span>
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
          />
          <button className="btn btn-register">login</button>
        </form>
      </section>
    </Wrapper>
  );
}
