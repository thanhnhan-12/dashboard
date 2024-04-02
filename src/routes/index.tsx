import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import LazyComponent from "../utils/lazyComponent";
import { CPATH } from "../constants/path";

const Home = LazyComponent(lazy(() => import("../pages/home")));
const Dashboard = LazyComponent(lazy(() => import("../pages/dashboard")));
const Login = LazyComponent(lazy(() => import("../pages/login")));

let routes: () => RouteObject[] = () => [
  {
    path: CPATH.HOME,
    element: <Home />,
  },

  {
    path: CPATH.DASHBOARD,
    element: <Dashboard />,
  },

  {
    path: CPATH.LOGIN,
    element: <Login />,
  },
];

export default routes;
