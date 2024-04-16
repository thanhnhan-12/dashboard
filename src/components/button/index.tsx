import { Button } from 'antd';

type onStart = () => void;

interface ButtonReloadTableProps {
  start: onStart;
  hasSelected: boolean;
  loading: boolean;
  selectedRowKeys: React.Key[];
}

export const ButtonReloadTable: React.FC<ButtonReloadTableProps> = ({
  start,
  hasSelected,
  loading,
  selectedRowKeys,
}) => {
  return (
    <div>
      <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
        Reload
      </Button>

      <span style={{ marginLeft: 8 }}>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
      </span>
    </div>
  );
};
