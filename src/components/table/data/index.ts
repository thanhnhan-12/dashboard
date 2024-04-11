import type { TableColumnsType } from "antd";
import { ITableData, ITableDataNew } from "../../../types/table";

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

  {
    key: "5",
    name: "Joel Glazer",
    age: 60,
    address: "Manchester No. 5 Lake Park",
  },

  {
    key: "6",
    name: "Glazer Glazer",
    age: 65,
    address: "Seattle No. 8 Bike Park",
  },

  {
    key: "7",
    name: "Pep Guardiola",
    age: 54,
    address: "Spain No. 11 Black Park",
  },

  {
    key: "8",
    name: "Jurgen Klopp",
    age: 58,
    address: "Germany No. 22 Dort Park",
  },

  {
    key: "9",
    name: "Zinedine Zidane",
    age: 56,
    address: "France No. 10 Real Park",
  },

  {
    key: "10",
    name: "Mikel Arteta",
    age: 56,
    address: "Spain No. 8 Real Park",
  },

  {
    key: "11",
    name: "Julian Nagelsmann",
    age: 56,
    address: "Germany No. 14 Real Park",
  },

  {
    key: "12",
    name: "Erik Ten Hag",
    age: 55,
    address: "Nether No. 8 Real Park",
  },
];

export const dataNew: ITableDataNew[] = [
  {
    key: "1",
    city: "Washington",
    district: "LA Laker",
  },

  {
    key: "2",
    city: "Atlanta",
    district: "Boston",
  },

  {
    key: "3",
    city: "Toronto",
    district: "Center",
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

export const columnsNew: TableColumnsType<ITableDataNew> = [
  {
    title: "City",
    dataIndex: "city",
  },

  {
    title: "District",
    dataIndex: "district",
  },
];
