import { Form, FormInstance } from 'antd';
import { ETypeAButtonPC } from '~/types/enum.type';
import ASelect from '~atoms/a-select';
import { IASelect } from '~atoms/a-select/ASelect';
import MFormButton from '~molecules/m-form-button';

interface IMSelect extends IASelect {
  form?: FormInstance<any>;
}

const MSelect = ({ form, options, disabled }: IMSelect) => {
  return (
    <Form form={form}>
      <Form.Item id="select" name="select" rules={[{ required: true, message: '注意する' }]}>
        <ASelect options={options} disabled={disabled} />
      </Form.Item>
      <MFormButton
        type={ETypeAButtonPC.PRIMARY}
        children="テキスト"
        size="large"
        htmlType="submit"
      />
    </Form>
  );
};

export default MSelect;
