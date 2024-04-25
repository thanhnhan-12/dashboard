import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import OForm from '~organisms/o-form';
import OTable from '~organisms/o-table';
import { columnsIntro, data, itemsSelect } from '~utils/data';
import './OTab.scss';
import MSelect from '~molecules/m-select';

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
    label: 'Dropdown',
    children: (
      <div style={{ marginLeft: '2rem' }}>
        <MSelect options={itemsSelect} />
      </div>
    ),
  },
];

const OTab = () => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default OTab;
