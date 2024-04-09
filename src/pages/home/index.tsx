import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CPATH } from "../../constants/path";

const Home = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    nav(CPATH.LOGIN);
  };

  return (
    <div>
      Home Page
      <Button onClick={handleLogout} style={{ marginLeft: "2rem" }}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
