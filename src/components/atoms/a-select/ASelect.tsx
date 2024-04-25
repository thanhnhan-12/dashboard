import { Select, SelectProps } from 'antd';
import clsx from 'clsx';
import './ASelect.scss';

export interface IASelect extends Omit<SelectProps, 'type'> {}

const ASelect = ({ disabled, options }: IASelect) => {
  const classAntd = clsx('a-select', { disabled: disabled });

  return (
    <div>
      <Select className={classAntd} placeholder="テキスト" disabled={disabled} options={options} />
    </div>
  );
};

export default ASelect;
