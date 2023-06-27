import LoginForm from "../features/auth/LoginForm";
import { useState } from "react";
import {
  useLoginUserMutation,
  useRefetchCurrentUserDataQuery,
} from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { useGetProfileByIdQuery } from "../features/users/UsersSlice";
export default function LoginPage() {
  const [login] = useLoginUserMutation();
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const response = await login({ email, password });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      Navigate("/dashboard/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginForm
      handleChange={handleChange}
      handleLogin={handleLogin}
      email={email}
      password={password}
    />
  );
}
