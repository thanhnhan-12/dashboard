import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CPATH } from "../../../constants/path";

const PrivateDashboard = ({ children }: { children: any }) => {
  const nav = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    // console.log("LoggedIn: ", loggedIn);

    if (loggedIn === "true") {
      nav(CPATH.HOME);
    } else {
      nav(CPATH.LOGIN);
    }
  }, [nav]);

  return children;
};

export default PrivateDashboard;
