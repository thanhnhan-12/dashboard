import { Pagination } from 'antd';

interface CustomPaginationProps {
  currentPage: number;
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  total,
  pageSize,
  onChange,
}) => {
  return (
    <div>
      <Pagination
        current={currentPage}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger
        showQuickJumper
        showTotal={(total, range) => ` ${range[0]} - ${range[1]} of ${total} `}
        style={{ marginTop: '4rem' }}
      />
    </div>
  );
};

export default CustomPagination;
