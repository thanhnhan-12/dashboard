import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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

  useEffect(() => {
    const filteredData = customSearchFunction(debouncedValue);
    setParamsQuery(filteredData as T[]);
  }, [debouncedValue]);

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
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
