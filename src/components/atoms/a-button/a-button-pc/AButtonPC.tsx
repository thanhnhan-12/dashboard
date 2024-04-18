import { Button, ButtonProps, Row } from 'antd';
import { ReactNode, useState } from 'react';
import { UpOutlined, LeftOutlined, RightOutlined, LoadingOutlined } from '@ant-design/icons';
import './AButtonPC.scss';
import clsx from 'clsx';

export interface IAButtonPC extends Omit<ButtonProps, 'type'> {
  type: 'primary' | 'secondary' | 'ghost' | 'accent';
  className?: ButtonProps['className'];
  topIcon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loadingIcon: boolean;
}

const AButtonPC = ({
  children,
  className,
  type,
  size,
  style,
  topIcon = <UpOutlined />,
  leftIcon = <LeftOutlined />,
  rightIcon = <RightOutlined />,
  loading,
  loadingIcon,
  ...props
}: IAButtonPC) => {
  const [isLoading, setIsLoading] = useState(loading);

  const classAntd = clsx('a-button', type, className);

  let typeButton;

  switch (type) {
    case 'primary':
      style = { backgroundColor: '#FF4500', color: '#fff', border: 'none' };
      break;
    case 'secondary':
      style = { backgroundColor: ' #fff', color: '#FF4500', borderColor: '#FF4500' };
      break;
    case 'ghost':
      style = { backgroundColor: ' #fff', color: '#FF4500', border: 'none' };
      break;
    case 'accent':
      style = { backgroundColor: '#FF6B00', color: '#fff', border: 'none' };
      break;
    default:
      typeButton = {};
  }

  const handleLoading = () => {
    if (loadingIcon) {
      // console.log('Loading: ', loadingIcon);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Button
        style={{ ...style, ...typeButton }}
        className={classAntd}
        onClick={handleLoading}
        loading={isLoading}
        {...props}
      >
        <Row>
          <div>
            {topIcon && <div>{topIcon}</div>}
            <div style={{ display: 'flex' }}>
              {leftIcon && <div>{leftIcon}</div>}
              <div style={{ margin: '0 1rem' }}>{children}</div>
              {isLoading ? <LoadingOutlined /> : rightIcon && <div>{rightIcon}</div>}
            </div>
          </div>
        </Row>
      </Button>
    </div>
  );
};

export default AButtonPC;
