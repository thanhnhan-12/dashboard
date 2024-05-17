import { Button, Checkbox, Flex, Form, Input, message } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthApiLogin } from '../../api/authApi';
import { CPATH } from '../../constants/path';
import './styles.scss';

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const nav = useNavigate();

  const onFinish = async (values: any) => {
    const { username, password } = values;

    if (!username || !password) {
      message.error('Please enter both username and password.');
      return;
    }

    setLoading(true);

    try {
      const isValid = await AuthApiLogin(username, password);

      if (isValid) {
        message.success('Login Successfully');
        nav(CPATH.HOME);
      } else {
        message.error('Invalid username or password');
      }
    } catch (error) {
      console.error('An error occurred: ', error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Flex className='page-login' justify="center" align="center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={3}>Login</Title>

        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <div className="forgot-pass">
          <Link to="">Forgot password?</Link>
        </div>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            {loading ? 'Logging in ... ' : 'Login'}
          </Button>
        </Form.Item>

        <div className="forgot-pass">
          <span>
            Don't have an account?
            <Link to="">Register</Link>
          </span>
        </div>
      </Form>
    </Flex>
  );
};

export default Login;
