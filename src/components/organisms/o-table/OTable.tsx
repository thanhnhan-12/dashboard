import { Breadcrumb, Layout, TableProps, theme } from 'antd';
import { useState } from 'react';
import MInputSearch from '~molecules/m-input-search';
import MTable from '~molecules/m-table';
import './OTable.scss';

interface IOTableProps<T> extends TableProps<T> {
  pageSize?: number;
  total?: number;
  isShowPagination?: boolean;
  setParamsQuery?: React.Dispatch<React.SetStateAction<TFilterParams>>;
  paramsQuery?: TFilterParams;
  dataSource: T[];
}

const { Content } = Layout;

const items = [
  { label: 'Home', path: '/' },
  { label: 'List', path: '/' },
  { label: 'App', path: '/' },
];

const OTable = <T extends Object>({
  pageSize = 10,
  columns,
  total = 0,
  setParamsQuery,
  paramsQuery,
  dataSource,
  ...props
}: IOTableProps<T>) => {
  const [searchTable, setSearchTable] = useState(dataSource);
  // console.log("SearchTable: " + searchTable);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handlePagination = (page: number) => {
    if (page) {
      setParamsQuery?.((pre) => ({
        ...pre,
        current_page: page ?? 0,
      }));
    }
  };

  const customSearchFunction = (value: string) => {
    return dataSource.filter((item) => {
      const stringifiedItem = JSON.stringify(item);
      return stringifiedItem.toLowerCase().includes(value.toLowerCase());
    });
  };

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb
        style={{ margin: '16px 0' }}
        items={items.map((item, index) => ({
          title: item.label,
          path: item.path,
          key: index,
        }))}
      />

      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <MInputSearch
          paramsQuery={searchTable}
          setParamsQuery={setSearchTable}
          customSearchFunction={customSearchFunction}
        />

        <MTable
          columns={columns}
          dataSource={searchTable}
          pageSize={pageSize}
          total={total}
          current={paramsQuery?.current_page || 1}
          handlePagination={handlePagination}
          {...props}
        />

        <div style={{ margin: '5rem 0' }}></div>
      </Content>
    </Layout>
  );
};

export default OTable;
