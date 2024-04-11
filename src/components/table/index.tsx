import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { ButtonReloadTable } from "../button";
import { SearchDataTable } from "../searchBar";
import CustomPagination from "../pagination";

interface TableDataProps<T extends object> {
  columns: ColumnsType<T>;
  dataSource: T[];
}

const TableData = <T extends object>({
  columns,
  dataSource,
}: TableDataProps<T>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataTable, setDataTable] = useState<T[]>(dataSource);

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

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

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
        />
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataTable}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: 100,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />
      <div>{}</div>
    </div>
  );
};

export default TableData;
