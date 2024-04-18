import { Button } from 'antd';

type onStart = () => void;

interface AButtonReloadProps {
  start: onStart;
  hasSelected: boolean;
  loading: boolean;
  selectedRowKeys: React.Key[];
}

const AButtonReload: React.FC<AButtonReloadProps> = ({
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

export default AButtonReload;
