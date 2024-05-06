import AButtonPC, { IAButtonPC } from '~atoms/a-button/a-button-pc/AButtonPC';

interface MFormButtonProps extends IAButtonPC {}

const MFormButton = ({
  children,
  className,
  htmlType,
  type,
  size,
  loading,
  disabled,
  hidden,
  handleButtonLoading,
}: MFormButtonProps) => {
  return (
    <AButtonPC
      type={type}
      size={size}
      className={className}
      htmlType={htmlType}
      loading={loading}
      disabled={disabled}
      hidden={hidden}
      handleButtonLoading={handleButtonLoading}
    >
      {children}
    </AButtonPC>
  );
};

export default MFormButton;
