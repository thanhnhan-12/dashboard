import { Button } from "antd";

export const ButtonReloadTable = ({
  start,
  hasSelected,
  loading,
  selectedRowKeys,
}: {
  start: any;
  hasSelected: boolean;
  loading: boolean;
  selectedRowKeys: any;
}) => {
  return (
    <div>
      <Button
        type="primary"
        onClick={start}
        disabled={!hasSelected}
        loading={loading}
      >
        Reload
      </Button>

      <span style={{ marginLeft: 8 }}>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
      </span>
    </div>
  );
};
