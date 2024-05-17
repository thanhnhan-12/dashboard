import { Col, Form, Input } from 'antd';
import { ETypeFieldForm } from '~/types/enum.type';
import { IMFormItemProps } from '~/types/form';

const { TextArea } = Input;

interface IMFormTextArea extends IMFormItemProps<ETypeFieldForm.TEXT_AREA> {
  placeholder?: string;
  clsInput?: string;
  max?: number;
  min?: number;
}

const MFormTextArea = ({
  colProps,
  atomProps,
  className,
  placeholder,
  clsInput,
  type,
  max,
  min,
  ...props
}: IMFormTextArea) => {
  return (
    <Col {...colProps}>
      <Form.Item {...props} className={className}>
        <TextArea placeholder={placeholder} className={clsInput} {...atomProps} />
      </Form.Item>
    </Col>
  );
};

export default MFormTextArea;
