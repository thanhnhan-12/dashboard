import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { CPATH } from '../constants/path';
import LazyComponent from '../utils/lazyComponent';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Home = LazyComponent(lazy(() => import('../pages/home')));
const Dashboard = LazyComponent(lazy(() => import('../pages/dashboard')));
const Login = LazyComponent(lazy(() => import('../pages/login')));

let routes: () => RouteObject[] = () => [
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: CPATH.HOME,
        element: <Home />,
      },

      {
        path: CPATH.DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },

  {
    path: CPATH.LOGIN,
    element: <PublicRoutes />,
    children: [
      {
        path: CPATH.LOGIN,
        element: <Login />,
      },
    ],
  },
];

export default routes;
