import { Navigate, Outlet } from "react-router-dom";
import { CPATH } from "../constants/path";
import { useAuth } from "../hooks";

const PrivateRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={CPATH.LOGIN} />;
};

export default PrivateRoutes;
