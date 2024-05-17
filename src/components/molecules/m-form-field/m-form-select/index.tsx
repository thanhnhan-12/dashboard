import { Col, Form, Select } from 'antd';
import clsx from 'clsx';
import { IconDownSelect } from '~/assets';
import { ETypeFieldForm } from '~/types/enum.type';
import { IMFormItemProps } from '~/types/form';

export type Option = { label: string | undefined; value: number | string };

interface IMFormSelect extends IMFormItemProps<ETypeFieldForm.SELECT> {
  listOptions?: Option[];
  placeholder?: string;
}

const MFormSelect = ({
  listOptions,
  placeholder,
  atomProps,
  colProps,
  isDisable = false,
  className,
  ...props
}: IMFormSelect) => {
  const classMFormSelect = clsx({ 'pointer-events-none': isDisable }, className);

  return (
    <Col {...colProps}>
      <Form.Item {...props}>
        <Select
          virtual={false}
          placeholder={placeholder ?? '形式をえらんでください'}
          className={classMFormSelect}
          suffixIcon={<IconDownSelect />}
          {...atomProps}
        />
      </Form.Item>
    </Col>
  );
};

export default MFormSelect;
