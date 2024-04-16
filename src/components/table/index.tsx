import { PaginationProps, Table } from 'antd';
import { TableProps } from 'antd/es/table';
import React, { useState } from 'react';
import { ButtonReloadTable } from '../button';

// import CustomPagination from '../pagination';

interface ITableDataProps extends TableProps {
  total: number;
  current: number;
  pageSize: number;
  isShowPagination?: boolean;
  handlePagination: PaginationProps['onChange'];
  contentPagination?: React.ReactNode;
  paramsQuery?: TFilterParams;
  setParamsQuery?: React.Dispatch<React.SetStateAction<TFilterParams>>;
}

const TableData = ({
  pageSize,
  total,
  current,
  isShowPagination = true,
  handlePagination,
  contentPagination,
  ...props
}: ITableDataProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const paginationProp = {
    total,
    current,
    pageSize,
  };

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
      </div>

      <Table
        rowSelection={rowSelection}
        showSorterTooltip={{ target: 'sorter-icon' }}
        pagination={isShowPagination ? { pageSize } : false}
        {...props}
      />

      {/* <CustomPagination
        currentPage={page}
        total={dataTable.length}
        pageSize={pageSize}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      /> */}

      {/* <div>
        {isShowPagination && <CustomPagination {...paginationProp} onChange={handlePagination} />}
        {contentPagination}
      </div> */}
    </div>
  );
};

export default TableData;
