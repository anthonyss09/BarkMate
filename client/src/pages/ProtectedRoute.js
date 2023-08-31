import { selectCurrentUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
