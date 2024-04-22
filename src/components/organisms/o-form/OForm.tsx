import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { ETypeAButtonPC } from '~/types/enum.type';
import MFormButton from '~molecules/m-form-button';

const OForm = () => {
  const [isLoading, setIsLoading] = useState({
    primary: false,
    secondary: false,
    ghost: false,
    accent: false,
  });

  const handleButtonLoading = (type: string) => {
    if (isLoading) {
      // console.log('Loading: ', isLoading.primary);
      setIsLoading((prevState) => ({ ...prevState, [type]: true }));
      setTimeout(() => {
        setIsLoading((prevState) => ({ ...prevState, [type]: false }));
      }, 1000);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div>
        <Title>Primary</Title>
        {/* Default */}
        <MFormButton type={ETypeAButtonPC.PRIMARY} children="テキスト" size="large" />

        {/* Hover */}
        <MFormButton type={ETypeAButtonPC.PRIMARY} children="テキスト" size="large" />

        {/* Disabled */}
        <MFormButton
          type={ETypeAButtonPC.PRIMARY}
          children="テキスト"
          size="large"
          disabled={true}
        />

        {/* Loading */}
        <MFormButton
          type={ETypeAButtonPC.PRIMARY}
          children="テキスト"
          size="large"
          loading={isLoading.primary}
          handleButtonLoading={() => handleButtonLoading('primary')}
        />
      </div>

      <div>
        <Title>Secondary</Title>
        {/* Default */}
        <MFormButton type={ETypeAButtonPC.SECONDARY} children="テキスト" size="large" />

        {/* Hover */}
        <MFormButton type={ETypeAButtonPC.SECONDARY} children="テキスト" size="large" />

        {/* Disabled */}
        <MFormButton
          type={ETypeAButtonPC.SECONDARY}
          children="テキスト"
          size="large"
          disabled={true}
        />

        {/* Loading */}
        <MFormButton
          type={ETypeAButtonPC.SECONDARY}
          children="テキスト"
          size="large"
          loading={isLoading.secondary}
          handleButtonLoading={() => handleButtonLoading('secondary')}
        />
      </div>

      <div>
        <Title>Ghost</Title>
        {/* Default */}
        <MFormButton type={ETypeAButtonPC.GHOST} children="テキスト" size="large" />

        {/* Hover */}
        <MFormButton type={ETypeAButtonPC.GHOST} children="テキスト" size="large" />

        {/* Disabled */}
        <MFormButton type={ETypeAButtonPC.GHOST} children="テキスト" size="large" disabled={true} />

        {/* Loading */}
        <MFormButton
          type={ETypeAButtonPC.GHOST}
          className="atom-button-ghost-loading"
          children="テキスト"
          size="large"
          loading={isLoading.ghost}
          handleButtonLoading={() => handleButtonLoading('ghost')}
        />
      </div>

      <div>
        <Title>Accent</Title>
        {/* Default */}
        <MFormButton type={ETypeAButtonPC.ACCENT} children="テキスト" size="large" />

        {/* Hover */}
        <MFormButton type={ETypeAButtonPC.ACCENT} children="テキスト" size="large" />

        {/* Disabled */}
        <MFormButton
          type={ETypeAButtonPC.ACCENT}
          children="テキスト"
          size="large"
          disabled={true}
        />

        {/* Loading */}
        <MFormButton
          type={ETypeAButtonPC.ACCENT}
          children="テキスト"
          size="large"
          loading={isLoading.accent}
          handleButtonLoading={() => handleButtonLoading('accent')}
        />
      </div>
    </div>
  );
};

export default OForm;
