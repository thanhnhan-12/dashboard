import { Input } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';

const { Search } = Input;

interface SearchDataTableProps<T> {
  setSearchTable: Dispatch<SetStateAction<T[]>>;
  customSearchFunction: (value: string) => T[];
  dataSource: T[];
}

export const SearchDataTable = <T extends object>({
  setSearchTable,
  customSearchFunction,
  dataSource,
}: SearchDataTableProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onSearch = (value: string) => {
    setSearchValue(value);
    // console.log("Value: " + value);

    const filteredData = customSearchFunction(value);

    setSearchTable(filteredData as T[]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value === '') {
      setSearchTable(dataSource);
    } else {
      onSearch(value);
    }
  };

  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
      style={{ width: '30%' }}
      value={searchValue}
      onChange={onChange}
    />
  );
};
