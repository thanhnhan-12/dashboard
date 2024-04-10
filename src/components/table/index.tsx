import { Table } from "antd";
import React, { useState } from "react";
import { ITableData } from "../../types/table";
import { ButtonReloadTable } from "../button";
import { SearchDataTable } from "../searchBar";
import { columns, data } from "./data";

const TableData = ({ columns }: { columns: any }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTable, setSearchTable] = useState<ITableData[]>(data);

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

  const hasSelected = selectedRowKeys.length > 0;

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

        <SearchDataTable setSearchTable={setSearchTable} />
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={searchTable}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default TableData;
