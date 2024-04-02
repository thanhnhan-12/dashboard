import { Button, Checkbox, Flex, Form, Input, type FormProps } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import "./styles.scss";

type FieldType = {
  username?: boolean;
  password?: boolean;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => {
  return (
    <div>
      <Flex justify="center" align="center">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title level={3}>Login</Title>

          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div className="forgot-pass">
            <Link to="">Forgot password?</Link>
          </div>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="unchecked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
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
    </div>
  );
};

export default Login;
