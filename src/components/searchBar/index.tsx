import { Input } from "antd";
import { Dispatch, SetStateAction, useState } from "react";

const { Search } = Input;

interface SearchDataTableProps<T> {
  setSearchTable: Dispatch<SetStateAction<T[]>>;
  customSearchFunction: (value: string) => T[];
}

export const SearchDataTable = <T extends object>({
  setSearchTable,
  customSearchFunction,
}: SearchDataTableProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSearch = (value: string) => {
    setSearchValue(value);
    console.log("Value: " + value);

    const filteredData = customSearchFunction(value);

    setSearchTable(filteredData as T[]);
  };

  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
      style={{ width: "30%" }}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
