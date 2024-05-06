import { Form } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { ETypeAButtonPC } from '~/types/enum.type';
import MFormButton from '~molecules/m-form-button';
import OLoginForm from '~organisms/o-login-form';

const OForm = () => {
  const [isLoading, setIsLoading] = useState({
    primary: false,
    secondary: false,
    ghost: false,
    accent: false,
  });

  const [form] = Form.useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleButtonLoading = (type: string) => {
    if (isLoading) {
      // console.log('Loading: ', isLoading.primary);
      setIsLoading((prevState) => ({ ...prevState, [type]: true }));
      setTimeout(() => {
        setIsLoading((prevState) => ({ ...prevState, [type]: false }));
      }, 1000);
    }
  };

  const handleUsernameChange = () => {};

  return (
    <div style={{ marginLeft: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <div>
          <Title>Primary</Title>
          {/* Default */}
          <MFormButton type={ETypeAButtonPC.PRIMARY} children="テキスト" size="large" />

          {/* Hover */}
          {/* <MFormButton type={ETypeAButtonPC.PRIMARY} children="テキスト" size="large" /> */}

          {/* Disabled */}
          {/* <MFormButton
            type={ETypeAButtonPC.PRIMARY}
            children="テキスト"
            size="large"
            disabled={true}
          /> */}

          {/* Loading */}
          {/* <MFormButton
            type={ETypeAButtonPC.PRIMARY}
            children="テキスト"
            size="large"
            loading={isLoading.primary}
            handleButtonLoading={() => handleButtonLoading('primary')}
          /> */}
        </div>
      </div>

      <div>
        <OLoginForm
          form={form}
          username={username}
          password={password}
          email={email}
          phoneNumber={phoneNumber}
          handleUsernameChange={handleUsernameChange}
        />
      </div>
    </div>
  );
};

export default OForm;
