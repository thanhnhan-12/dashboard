import { Layout } from "antd";
import ContentLayout from "../../components/content";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sider";

const Home = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <ContentLayout />
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
