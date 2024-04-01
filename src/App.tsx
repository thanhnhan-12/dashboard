import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LazyComponent from "./utils/lazyComponent";
// import Navbar from "./components/navbar";

const Home = LazyComponent(lazy(() => import("./pages/home")));
const Dashboard = LazyComponent(lazy(() => import("./pages/dashboard")));
const Login = LazyComponent(lazy(() => import("./pages/login")));

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
