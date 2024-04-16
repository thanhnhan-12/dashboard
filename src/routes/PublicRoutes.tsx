import { Navigate, Outlet } from 'react-router-dom';
import { CPATH } from '../constants/path';
import { useAuth } from '../hooks';

const PublicRoutes = () => {
  const auth = useAuth();

  return auth ? <Navigate to={CPATH.HOME} /> : <Outlet />;
};

export default PublicRoutes;
