import { selectCurrentUser, selectUserToken } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGetAuthorizationMutation } from "../features/auth/authSlice";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectUserToken);

  // const [getAuth] = useGetAuthorizationMutation();

  // let isAuthorized = true;

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("token")) || "token";

  //   const fetchAuth = async (token) => {
  //     const response = await getAuth(token);

  //     isAuthorized = response.data.authorization;
  //   };
  //   fetchAuth(token);
  // }, []);

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}
