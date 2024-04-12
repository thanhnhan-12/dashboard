import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { ButtonReloadTable } from '../button';
import { SearchDataTable } from '../searchBar';
import CustomPagination from '../pagination';

interface TableDataProps<T extends object> extends PagianationProps {
  columns: ColumnsType<T>;
  dataSource: T[];
}

const TableData = <T extends object>({
  columns,
  dataSource,
  page,
  pageSize,
  setPage,
  setPageSize,
}: TableDataProps<T>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataTable, setDataTable] = useState<T[]>(dataSource);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // console.log("SelectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0; // Selected Item

  // Search Data Table
  const customSearchFunction = (value: string) => {
    return dataSource.filter((item) => {
      const stringifiedItem = JSON.stringify(item);
      return stringifiedItem.toLowerCase().includes(value.toLowerCase());
    });
  };

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  // Filter Current Page Data
  const currentPageData = dataTable.slice(startIndex, endIndex);

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ButtonReloadTable
          start={start}
          hasSelected={hasSelected}
          loading={loading}
          selectedRowKeys={selectedRowKeys}
        />

        <SearchDataTable
          setSearchTable={setDataTable}
          customSearchFunction={customSearchFunction}
          dataSource={dataTable}
        />
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={currentPageData}
        showSorterTooltip={{ target: 'sorter-icon' }}
        pagination={false}
      />

      <CustomPagination
        currentPage={page}
        total={dataTable.length}
        pageSize={pageSize}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
};

export default TableData;
