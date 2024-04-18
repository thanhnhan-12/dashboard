import { Layout } from 'antd';
import ONavbar from '~organisms/o-navbar';
import OSider from '~organisms/o-sider';
import OTab from '~organisms/o-tab';

const Home = () => {
  return (
    <div>
      <Layout>
        <ONavbar />
        <Layout>
          <OSider />
          <OTab />
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
