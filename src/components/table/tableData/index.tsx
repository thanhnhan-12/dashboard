import { Table } from "antd";

export const TableComponent = ({
  columns,
  searchTable,
  selectedRowKeys,
  onSelectChange,
}: {
  columns: any;
  searchTable: any;
  selectedRowKeys: any;
  onSelectChange: any;
}) => {
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={searchTable}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};
