import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default Navbar;
