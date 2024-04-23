import { Input, InputProps } from 'antd';
import clsx from 'clsx';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ETypeInputField } from '~/types/enum.type';
import './AInput.scss';

export interface IAInput extends Omit<InputProps, 'type'> {
  inputType: ETypeInputField;
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AInput = ({
  inputType,
  type,
  placeholder,
  id,
  value,
  prefix,
  suffix,
  disabled,
  onChange,
}: IAInput) => {
  const classAntd = clsx('a-input', type, { disabled: disabled });

  switch (inputType) {
    case ETypeInputField.LEFT:
      prefix = <LeftOutlined />;
      break;
    case ETypeInputField.RIGHT:
      suffix = <RightOutlined className={disabled ? 'disabled-icon' : ''} />;
      break;
    case ETypeInputField.SUFFIX:
      suffix = suffix && <span className="suffixText">{suffix}</span>;
      break;
    default:
      break;
  }

  return (
    <Input
      className={classAntd}
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      prefix={prefix}
      suffix={suffix}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default AInput;
