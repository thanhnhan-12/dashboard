import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CPATH } from '~constants/path';

const { Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const OSider = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    nav(CPATH.LOGIN);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={["sub1"]}
        style={{ height: '80%', borderRight: 0 }}
        items={items2}
      />
      <div
        style={{
          marginTop: '10rem',
        }}
      >
        <Button
          onClick={handleLogout}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '70%',
            padding: '2rem 2rem',
            margin: 'auto',
          }}
        >
          Logout
          <div>
            <LogoutOutlined />
          </div>
        </Button>
      </div>
    </Sider>
  );
};

export default OSider;
