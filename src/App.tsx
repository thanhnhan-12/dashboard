import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
// import Navbar from "./components/navbar";

const Home = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading">
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback="Loading">
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback="Loading">
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
