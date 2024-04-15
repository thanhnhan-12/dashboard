import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { Dispatch, SetStateAction, useState } from 'react';
import { useDebounce } from '../../hooks';

const { Search } = Input;

interface SearchDataTableProps<T> {
  setParamsQuery: Dispatch<SetStateAction<T[]>>;
  paramsQuery: T[];
  customSearchFunction: (value: string) => T[];
}

export const SearchDataTable = <T extends object>({
  paramsQuery,
  setParamsQuery,
  customSearchFunction,
}: SearchDataTableProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedValue = useDebounce({ value: searchValue, delay: 500 });

  // console.log('debouncedValue: ' + debouncedValue);

  const onSearch = (value: string) => {
    setSearchValue(value);
    // console.log(value);
    const filteredData = customSearchFunction(value);
    setParamsQuery(filteredData as T[]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    setSearchValue(value);
  };

  return (
    <Search
      placeholder="input search text"
      enterButton
      allowClear
      style={{ width: '30%' }}
      onSearch={onSearch}
      onChange={onChange}
    />
  );
};
