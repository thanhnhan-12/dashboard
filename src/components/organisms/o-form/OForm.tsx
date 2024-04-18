import Title from 'antd/es/typography/Title';
import MFormButton from '~molecules/m-form-button';

const OForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div>
        <Title>Primary</Title>
        {/* Default */}
        <MFormButton
          type="primary"
          className="atom-button-primary-default"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Hover */}
        <MFormButton
          type="primary"
          className="atom-button-primary-hover"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Disabled */}
        <MFormButton
          type="primary"
          className="atom-button-primary-disabled"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="primary"
          className="atom-button-primary-loading"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>

      <div>
        <Title>Secondary</Title>
        {/* Default */}
        <MFormButton
          type="secondary"
          className="atom-button-secondary-default"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Hover */}
        <MFormButton
          type="secondary"
          className="atom-button-secondary-hover"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Disabled */}
        <MFormButton
          type="secondary"
          className="atom-button-secondary-disabled"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="secondary"
          className="atom-button-secondary-loading"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>

      <div>
        <Title>Ghost</Title>
        {/* Default */}
        <MFormButton
          type="ghost"
          className="atom-button-ghost-default"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Hover */}
        <MFormButton
          type="ghost"
          className="atom-button-ghost-hover"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Disabled */}
        <MFormButton
          type="ghost"
          className="atom-button-ghost-disabled"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="ghost"
          className="atom-button-ghost-loading"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>

      <div>
        <Title>Accent</Title>
        {/* Default */}
        <MFormButton
          type="accent"
          className="atom-button-accent-default"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Hover */}
        <MFormButton
          type="accent"
          className="atom-button-accent-hover"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Disabled */}
        <MFormButton
          type="accent"
          className="atom-button-accent-disabled"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="accent"
          className="atom-button-accent-loading"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>
    </div>
  );
};

export default OForm;
