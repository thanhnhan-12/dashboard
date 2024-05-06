import { Tabs } from 'antd';
import MSelect from '~molecules/m-select';
import OCard from '~organisms/o-card';
import OForm from '~organisms/o-form';
import OTable from '~organisms/o-table';
import { columnsIntro, data, itemsSelect } from '~utils/data';
import './OTab.scss';

// const onChange = (key: string) => {
//   console.log(key);
// };

const OTab = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
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
              <MSelect options={itemsSelect} placeholder="テキスト" />
            </div>
          ),
        },
        {
          key: '4',
          label: 'Card',
          children: <OCard />,
        },
      ]}
      // onChange={onChange}
    />
  );
};

export default OTab;
