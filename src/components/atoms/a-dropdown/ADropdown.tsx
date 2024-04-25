import { DownOutlined } from '@ant-design/icons';
import { DropDownProps, Dropdown, Space } from 'antd';
import clsx from 'clsx';
import './ADropdown.scss';

export interface IADropdown extends Omit<DropDownProps, 'type'> {}

const ADropdown = ({ disabled, menu }: IADropdown) => {
  const classAntd = clsx('a-dropdown', { disabled: disabled });

  return (
    <Dropdown
      className={classAntd}
      menu={menu}
      disabled={disabled}
      arrow
      placement="bottomLeft"
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          テキスト
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ADropdown;
