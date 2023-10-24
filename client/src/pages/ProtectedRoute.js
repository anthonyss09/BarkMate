import { selectCurrentUser, selectUserToken } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGetAuthorizationMutation } from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import DotLoader from "react-spinners/DotLoader";

export default function ProtectedRoute({ children }) {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectUserToken);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [getAuth] = useGetAuthorizationMutation();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token")) || "token";
    console.log("the token is", token);

    const fetchAuth = async (token) => {
      try {
        const response = await getAuth(token);
        console.log(response.data.authorization);
        setIsAuthorized(response.data.authorization);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchAuth(token);
  }, []);

  if (isLoading) {
    return (
      <div className="alert-container">
        <DotLoader size={85} color="lightBlue" className="beat-loader" />
      </div>
    );
  } else if (!isAuthorized) {
    return <Navigate to="/" replace />;
  } else if (isAuthorized) {
    return children;
  }
}
