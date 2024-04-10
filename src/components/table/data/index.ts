import type { TableColumnsType } from "antd";
import { ITableData } from "../../../types/table";

export const data: ITableData[] = [
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

export const columns: TableColumnsType<ITableData> = [
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
