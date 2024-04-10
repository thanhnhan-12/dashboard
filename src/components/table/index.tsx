import type { TableColumnsType } from "antd";
import { Button, Input, Table } from "antd";
import React, { useState } from "react";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const { Search } = Input;

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 28,
    address: "London No. 2 Lake Park",
  },
];

const TableData = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTable, setSearchTable] = useState<DataType[]>(data);

  const onSearch = (value: string) => {
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.age.toString().includes(value.toLowerCase()) ||
        item.address.toLowerCase().includes(value.toLowerCase())
    );
    // console.log("Filtered Data: " + filteredData);
    setSearchTable(filteredData);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },

    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
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
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ width: "30%" }}
        />
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
