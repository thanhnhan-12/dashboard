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

const PublicRoutes = () => {
  const auth = useAuth();

  return auth ? <Navigate to={CPATH.HOME} /> : <Outlet />;
};

export default PublicRoutes;
