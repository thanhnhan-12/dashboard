import { Form, FormInstance } from 'antd';
import { ETypeInputField } from '~/types/enum.type';
import MFormInput from '~molecules/m-form-input';

interface IOLoginForm {
  form: FormInstance<any>;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OLoginForm = ({
  form,
  username,
  email,
  password,
  phoneNumber,
  handleUsernameChange,
}: IOLoginForm) => {
  return (
    <Form form={form}>
      <MFormInput
        inputType={ETypeInputField.DEFAULT}
        type="number"
        value={phoneNumber}
        placeholder="でんわ"
        id="でんわ"
        name="でんわ"
        rules={[
          {
            required: true,
            whitespace: true,
            message: '注意する',
            type: 'string',
            min: 10,
          },
        ]}
        onChange={handleUsernameChange}
      />

      <MFormInput
        inputType={ETypeInputField.LEFT}
        type="text"
        value={username}
        placeholder="ユーザー名"
        id="ユーザー名"
        name="ユーザー名"
        rules={[
          {
            required: true,
            whitespace: true,
            message: '注意する',
            type: 'string',
            min: 8,
          },
        ]}
        onChange={handleUsernameChange}
      />

      <MFormInput
        inputType={ETypeInputField.RIGHT}
        type="email"
        value={email}
        placeholder="メール"
        id="メール"
        name="メール"
        rules={[
          {
            required: true,
            whitespace: true,
            message: '注意する',
            type: 'email',
          },
        ]}
        // disabled
        onChange={handleUsernameChange}
      />

      <MFormInput
        inputType={ETypeInputField.SUFFIX}
        type="password"
        value={password}
        placeholder="パスワード"
        id="パスワード"
        name="パスワード"
        suffix="テキスト"
        rules={[
          {
            required: true,
            whitespace: true,
            message: '注意する',
            type: 'string',
            min: 8,
          },
        ]}
        disabled
        onChange={handleUsernameChange}
      />
    </Form>
  );
};

export default OLoginForm;
