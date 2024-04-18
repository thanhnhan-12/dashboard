import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

const MPagination = ({
  showSizeChanger = false,
  prevIcon,
  nextIcon,
  ...props
}: PaginationProps) => {
  return (
    <Pagination
      showSizeChanger={showSizeChanger}
      {...props}
      // showTotal={(total, range) => ` ${range[0]} - ${range[1]} of ${total} `}
      style={{ marginTop: '4rem' }}
    />
  );
};

export default MPagination;
