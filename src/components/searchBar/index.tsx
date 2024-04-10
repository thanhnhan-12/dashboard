import { Input } from "antd";
import { data } from "../table/data";

const { Search } = Input;

export const SearchDataTable = ({
  setSearchTable,
}: {
  setSearchTable: any;
}) => {
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

  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
      style={{ width: "30%" }}
    />
  );
};
