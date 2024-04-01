import { ConfigProvider, Typography } from "antd";
import { customTheme } from "../../theme/palette";

const Dashboard = () => {
  return (
    <ConfigProvider>
      <Typography.Title level={1}>Dashboard</Typography.Title>
    </ConfigProvider>
  );
};

export default Dashboard;
