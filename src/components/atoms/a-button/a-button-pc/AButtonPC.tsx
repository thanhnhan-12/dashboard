import { Button, ButtonProps, Row } from 'antd';
import { ReactNode } from 'react';
import { UpOutlined, LeftOutlined, RightOutlined, LoadingOutlined } from '@ant-design/icons';
import './AButtonPC.scss';
import clsx from 'clsx';
import { ETypeAButtonPC } from '~/types/enum.type';

export interface IAButtonPC extends Omit<ButtonProps, 'type'> {
  type: ETypeAButtonPC;
  className?: ButtonProps['className'];
  topIcon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loadingIcon?: boolean;
  handleButtonLoading?: () => void;
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
  disabled,
  handleButtonLoading,
  ...props
}: IAButtonPC) => {
  const typeToClassName = {
    [ETypeAButtonPC.PRIMARY]: loading
      ? 'atom-button-primary-loading'
      : disabled
        ? 'atom-button-primary-disabled'
        : 'atom-button-primary-default',
    [ETypeAButtonPC.SECONDARY]: loading
      ? 'atom-button-secondary-loading'
      : disabled
        ? 'atom-button-secondary-disabled'
        : 'atom-button-secondary-default',
    [ETypeAButtonPC.GHOST]: loading
      ? 'atom-button-ghost-loading'
      : disabled
        ? 'atom-button-ghost-disabled'
        : 'atom-button-ghost-default',
    [ETypeAButtonPC.ACCENT]: loading
      ? 'atom-button-accent-loading'
      : disabled
        ? 'atom-button-accent-disabled'
        : 'atom-button-accent-default',
  };

  const classAntd = clsx('a-button', type, typeToClassName[type]);

  let typeButton;

  switch (type) {
    case ETypeAButtonPC.PRIMARY:
      typeButton = { backgroundColor: '#FF4500', color: '#fff', border: 'none' };
      break;
    case ETypeAButtonPC.SECONDARY:
      typeButton = { backgroundColor: ' #fff', color: '#FF4500', borderColor: '#FF4500' };
      break;
    case ETypeAButtonPC.GHOST:
      typeButton = { backgroundColor: ' #fff', color: '#FF4500', border: 'none' };
      break;
    case ETypeAButtonPC.ACCENT:
      typeButton = { backgroundColor: '#FF6B00', color: '#fff', border: 'none' };
      break;
    default:
      typeButton = { backgroundColor: '#FF4500', color: '#fff', border: 'none' };
  }

  return (
    <div>
      <Button
        style={{ ...style, ...typeButton }}
        className={classAntd}
        onClick={handleButtonLoading}
        loading={loadingIcon}
        disabled={disabled}
        {...props}
      >
        <Row>
          <div>
            {topIcon && <div>{topIcon}</div>}
            <div style={{ display: 'flex' }}>
              {leftIcon && <div>{leftIcon}</div>}
              <div style={{ margin: '0 1rem' }}>{children}</div>
              {loadingIcon ? <LoadingOutlined /> : rightIcon && <div>{rightIcon}</div>}
            </div>
          </div>
        </Row>
      </Button>
    </div>
  );
};

export default AButtonPC;
