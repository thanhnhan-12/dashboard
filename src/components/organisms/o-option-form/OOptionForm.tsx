import { Form } from 'antd';
import { useState } from 'react';
import { EGroupFormOption, ETypeFieldForm } from '~/types/enum.type';
import { IFormOption, TMappedFormItems } from '~/types/form';
import { COLDEF, groupFormOptions } from '~constants/form';
import OFormSwitch from '~organisms/o-form-switch';
import { messageErrorMaxCharacter, messageErrorRequired } from '~utils/funcHelper';

const OOptionForm = () => {
  const [formcontrol] = Form.useForm();
  const [selectedValue, setSelectedValue] = useState<number>(
    EGroupFormOption.応募した企業から連絡がない,
  );

  const listFieldForm: TMappedFormItems[] = [
    {
      type: ETypeFieldForm.TEXT_FIELD,
      label: '氏名',
      name: 'username',
      atomProps: {
        placeholder: '例）山田 太郎',
        maxLength: 63,
      },
      colProps: {
        span: COLDEF,
      },
      rules: [
        {
          required: true,
          whitespace: true,
          message: messageErrorRequired('氏名'),
        },
        {
          max: 63,
          message: messageErrorMaxCharacter(63),
        },
      ],
    },

    {
      type: ETypeFieldForm.INPUT_NUMBER,
      label: '電話番号',
      name: 'phoneNumber',
      atomProps: {
        placeholder: '例) 01234567890',
        formcontrol,
      },
      colProps: {
        span: COLDEF,
      },
      rules: [
        {
          required: true,
          message: messageErrorRequired('電話番号'),
        },
      ],
    },

    {
      type: ETypeFieldForm.TEXT_FIELD,
      label: 'メールアドレス',
      name: 'email',
      atomProps: {
        placeholder: '例) example@example.com',
        maxLength: 63,
      },
      colProps: {
        span: COLDEF,
      },
      rules: [
        {
          required: true,
          message: messageErrorRequired('メールアドレス'),
        },
        {
          max: 63,
          message: messageErrorMaxCharacter(63),
        },
      ],
    },

    {
      type: ETypeFieldForm.SELECT,
      label: 'お問い合わせ内容',
      name: 'group_id',
      initialValue: EGroupFormOption.応募した企業から連絡がない,
      atomProps: {
        placeholder: 'お問い合わせ内容',
        options: groupFormOptions,
      },
      colProps: {
        span: COLDEF,
      },
      rules: [
        {
          required: true,
          message: messageErrorRequired('お問い合わせ内容'),
        },
      ],
    },
  ];

  const textAreaField: TMappedFormItems[] = [
    {
      type: ETypeFieldForm.TEXT_AREA,
      label: 'お問い合わせ詳細',
      name: 'explanation_content',
      atomProps: {
        placeholder: 'お問い合わせ詳細を入力',
        maxLength: 1000,
      },
      colProps: {
        span: COLDEF,
      },
      rules: [
        {
          required: true,
          whitespace: true,
          message: messageErrorRequired('お問い合わせ詳細'),
        },
        {
          max: 1000,
          message: messageErrorMaxCharacter(1000),
        },
      ],
    },
  ];

  const additionalFields: Record<number, TMappedFormItems[]> = {
    1: [
      {
        type: ETypeFieldForm.TEXT_FIELD,
        label: '応募した企業の企業名',
        name: 'company_name',
        atomProps: {
          placeholder: '例) 麵屋グルスタ 渋谷店',
          maxLength: 63,
        },
        colProps: {
          span: COLDEF,
        },
        rules: [
          {
            required: true,
            whitespace: true,
            message: messageErrorRequired('応募した企業の企業名'),
          },
          {
            max: 63,
            message: messageErrorMaxCharacter(63),
          },
        ],
      },
    ],
    2: [
      {
        type: ETypeFieldForm.TEXT_FIELD,
        label: 'サイトURL',
        name: 'site_url',
        atomProps: {
          placeholder: '例) https://example.com',
          maxLength: 63,
        },
        colProps: {
          span: COLDEF,
        },
        rules: [
          {
            required: true,
            whitespace: true,
            message: messageErrorRequired('メールアドレス'),
          },
          {
            max: 63,
            message: messageErrorMaxCharacter(63),
          },
        ],
      },
    ],
    3: [
      {
        type: ETypeFieldForm.TEXT_FIELD,
        label: '求人詳細URL',
        name: 'job_detail_url',
        atomProps: {
          placeholder: '例) https://example.com',
          maxLength: 63,
        },
        colProps: {
          span: COLDEF,
        },
        rules: [
          {
            required: true,
            whitespace: true,
            message: messageErrorRequired('求人詳細URL'),
          },
          {
            max: 63,
            message: messageErrorMaxCharacter(63),
          },
        ],
      },
    ],
  };

  const handleValuesChange = (changedValues: IFormOption) => {
    if (changedValues.group_id !== undefined) {
      setSelectedValue(changedValues.group_id);
    }
  };

  const handleSubmit = (values: IFormOption) => {
    console.log('Submit Form Values: ', values);
  };

  const renderFieldsForm = selectedValue
    ? [...listFieldForm, ...(additionalFields[selectedValue] || []), ...textAreaField]
    : listFieldForm;

  return (
    <OFormSwitch
      form={formcontrol}
      listField={renderFieldsForm}
      onSubmitForm={handleSubmit}
      handleValuesChange={handleValuesChange}
    />
  );
};

export default OOptionForm;
