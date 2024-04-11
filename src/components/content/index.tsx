import { Breadcrumb, Layout, theme } from "antd";
import TableData from "../table";
import { columns, columnsNew, data, dataNew } from "../table/data";

const { Content } = Layout;

const items = [
  { label: "Home", path: "/" },
  { label: "List", path: "/" },
  { label: "App", path: "/" },
];

const ContentLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        {items.map((item, index) => (
          <Breadcrumb.Item key={index} href={item.path}>
            {item.label}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <TableData columns={columns} dataSource={data} />
        <div style={{ margin: "5rem 0" }}></div>
        <TableData columns={columnsNew} dataSource={dataNew} />
      </Content>
    </Layout>
  );
};

export default ContentLayout;
