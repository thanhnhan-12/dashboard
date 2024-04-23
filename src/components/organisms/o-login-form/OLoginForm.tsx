import { Form, FormInstance } from 'antd';
import { ETypeInputField } from '~/types/enum.type';
import MFormInput from '~molecules/m-form-input';

interface IOLoginForm {
  form: FormInstance<any>;
  username: string;
  password: string;
  email: string;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OLoginForm = ({ form, username, email, password, handleUsernameChange }: IOLoginForm) => {
  return (
    <Form form={form}>
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
            type: 'email',
          },
        ]}
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
            type: 'string',
            min: 8,
          },
        ]}
        onChange={handleUsernameChange}
      />
    </Form>
  );
};

export default OLoginForm;
