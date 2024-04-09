import { Navigate, Outlet } from "react-router-dom";
import { CPATH } from "../constants/path";

const useAuth = () => {
  const refreshToken = localStorage.getItem("isLoggedIn");

  if (refreshToken) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={CPATH.LOGIN} />;
};

export default PrivateRoutes;
