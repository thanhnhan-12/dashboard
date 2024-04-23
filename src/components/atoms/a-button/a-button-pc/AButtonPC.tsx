import { LeftOutlined, LoadingOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Row } from 'antd';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { ETypeAButtonPC } from '~/types/enum.type';
import './AButtonPC.scss';

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
  // combine type of classNames
  const getTypeClassName = (type: ETypeAButtonPC, loading: boolean, disabled: boolean) => {
    let status = 'default';
    if (loading) {
      status = 'loading';
    } else if (disabled) {
      status = 'disabled';
    }
    return `atom-button-${type}-${status}`;
  };

  const classAntd = clsx(
    'a-button',
    type,
    getTypeClassName(type, loading as boolean, disabled as boolean),
  );

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
              {loading ? <LoadingOutlined /> : rightIcon && <div>{rightIcon}</div>}
            </div>
          </div>
        </Row>
      </Button>
    </div>
  );
};

export default AButtonPC;
