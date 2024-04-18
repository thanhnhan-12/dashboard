import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import OTable from '~organisms/o-table';
import { columnsIntro, data } from '~utils/data';
import './OTab.scss';
import OForm from '~organisms/o-form';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Table',
    children: <OTable dataSource={data} columns={columnsIntro} />,
  },
  {
    key: '2',
    label: 'Button',
    children: <OForm />,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const OTab = () => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default OTab;
