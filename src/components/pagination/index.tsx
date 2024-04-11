import { Pagination } from "antd";

interface CustomPaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  total,
  pageSize,
  onChange,
}) => {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
      style={{ marginTop: "4rem" }}
    />
  );
};

export default CustomPagination;
