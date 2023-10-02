import LoginForm from "../features/auth/LoginForm";
import { useState } from "react";
import { useLoginUserMutation } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useGetProfileByIdQuery } from "../features/users/UsersSlice";
import { useDispatch } from "react-redux";
import { displayAlert, clearAlert } from "../features/alerts/alertsSlice";
import { useSelector } from "react-redux";
import { selectAlertsInfo } from "../features/alerts/alertsSlice";
import Alert from "../features/alerts/Alert";
import BeatLoader from "react-spinners/BeatLoader";

export default function LoginPage() {
  const [login] = useLoginUserMutation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requesting, setRequesting] = useState(false);

  const { alertType, alertMessage, showAlert } = useSelector(selectAlertsInfo);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setRequesting(true);
      const response = await login({ email, password });

      if (response.error) {
        dispatch(
          displayAlert({
            alertType: "danger",
            alertMessage: response.error.data.message,
          })
        );
        console.log(response);
      } else if (response.data) {
        dispatch(
          displayAlert({ alertType: "success", alertMessage: "Welcome back!" })
        );
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        Navigate("/dashboard/home");
        // window.location.reload(true);
      }
      setRequesting(false);
      setPassword("");

      setTimeout(() => {
        dispatch(clearAlert());
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      {" "}
      {requesting && (
        <BeatLoader size={35} color="lightBlue" className="beat-loader" />
      )}
      {showAlert && <Alert alertMessage={alertMessage} alertType={alertType} />}
      <LoginForm
        handleChange={handleChange}
        handleLogin={handleLogin}
        email={email}
        password={password}
        requesting={requesting}
      />
    </section>
  );
}
