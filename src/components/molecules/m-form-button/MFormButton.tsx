import AButtonPC, { IAButtonPC } from '~atoms/a-button/a-button-pc/AButtonPC';

interface MFormButtonProps extends IAButtonPC {}

const MFormButton = ({
  children,
  className,
  htmlType,
  type,
  size,
  loadingIcon,
}: MFormButtonProps) => {
  return (
    <div>
      <AButtonPC
        type={type}
        size={size}
        className={className}
        htmlType={htmlType}
        loadingIcon={loadingIcon}
      >
        {children}
      </AButtonPC>
    </div>
  );
};

export default MFormButton;
