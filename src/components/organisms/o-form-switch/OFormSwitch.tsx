import { Form, FormProps, Row } from 'antd';
import clsx from 'clsx';
import { useMemo } from 'react';
import { ETypeAButtonPC, ETypeFieldForm } from '~/types/enum.type';
import { TMappedFormItems } from '~/types/form';
import { MFormField } from '~molecules/m-form-field';
import './OFormSwitch.scss';
import MFormButton from '~molecules/m-form-button';

interface IOFormSwitch<Values extends Record<string, any> = Record<string, any>>
  extends FormProps<Values> {
  listField: TMappedFormItems[];
  handleValuesChange: (changedValues: object, values: Values) => void;
  onSubmitForm: (values: Values) => void;
  handleResetForm?: () => void;
  loading?: boolean;
}

const OFormSwitch = <Values extends Record<string, any>>({
  listField,
  handleValuesChange,
  loading = false,
  className,
  initialValues,
  onSubmitForm,
  handleResetForm,
  ...props
}: IOFormSwitch<Values>) => {
  const classOForm = clsx('o-form-switch', className);

  // const { form } = props;

  const renderFieldForm = useMemo(() => {
    return listField.map((item, index) => {
      switch (item.type) {
        case ETypeFieldForm.TEXT_FIELD:
          return <MFormField.TextField key={`${item.name}-${index}`} {...item} />;

        case ETypeFieldForm.INPUT_NUMBER:
          return <MFormField.InputNumber key={`${item.name}-${index}`} {...item} />;

        case ETypeFieldForm.SELECT:
          return <MFormField.Select key={`${item.name}-${index}`} {...item} />;

        case ETypeFieldForm.TEXT_AREA:
          return <MFormField.TextArea key={`${item.name}-${index}`} {...item} />;

        default:
          return null;
      }
    });
  }, [listField]);

  return (
    <div className={classOForm}>
      <Form<Values>
        colon={false}
        layout="vertical"
        onValuesChange={handleValuesChange}
        onFinish={onSubmitForm}
        onReset={handleResetForm}
        {...props}
      >
        <Row gutter={[48, 0]}> {renderFieldForm} </Row>
        <Row className="o-form-btn-submit">
          <MFormButton
            type={ETypeAButtonPC.PRIMARY}
            children="この内容で送信する"
            htmlType="submit"
            hidden
          />
        </Row>
      </Form>
    </div>
  );
};

export default OFormSwitch;
