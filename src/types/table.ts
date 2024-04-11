export interface ITableData {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export interface ITableDataNew {
  key: React.Key;
  city: string;
  district: string;
}

export interface TableColumns<T> {
  title: string;
  dataIndex: string;
  key?: string;
  sorter?: (a: T, b: T) => number;
}
