import { Form } from 'antd';
import { Rule } from 'antd/es/form';
import AInput, { IAInput } from '~atoms/a-input/AInput';

interface IMFormInput extends IAInput {
  name: string;
  rules: Rule[] | undefined;
}

const MFormInput = ({
  inputType,
  type,
  placeholder,
  id,
  value,
  name,
  disabled,
  rules,
  onChange,
  ...props
}: IMFormInput) => {
  return (
    <Form.Item name={name} rules={rules}>
      <AInput
        inputType={inputType}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </Form.Item>
  );
};

export default MFormInput;
