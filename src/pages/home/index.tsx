import { ConfigProvider, Typography } from "antd";
import { customTheme } from "../../theme/palette";

const Home = () => {
  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: customTheme.color.primary } }}
    >
      <Typography.Title level={1}>Home</Typography.Title>
    </ConfigProvider>
  );
};

export default Home;
