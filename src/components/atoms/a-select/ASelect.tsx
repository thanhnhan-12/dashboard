import { Select, SelectProps } from 'antd';
import clsx from 'clsx';
import './ASelect.scss';
import { IconDownSelect } from '~/assets';

export interface IASelect extends Omit<SelectProps, 'type'> {}

const ASelect = ({ disabled, options, placeholder }: IASelect) => {
  const classAntd = clsx('a-select', { disabled: disabled });

  return (
    <Select
      className={classAntd}
      placeholder={placeholder}
      disabled={disabled}
      options={options}
      suffixIcon={<IconDownSelect />}
    />
  );
};

export default ASelect;
