import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import LazyComponent from "../utils/lazyComponent";
import { CPath } from "../constants/path";

const Home = LazyComponent(lazy(() => import("../pages/home")));
const Dashboard = LazyComponent(lazy(() => import("../pages/dashboard")));
const Login = LazyComponent(lazy(() => import("../pages/login")));

let routes: () => RouteObject[] = () => [
  {
    path: CPath.home,
    element: <Home />,
  },

  {
    path: CPath.dashboard,
    element: <Dashboard />,
  },

  {
    path: CPath.login,
    element: <Login />,
  },
];

export default routes;
