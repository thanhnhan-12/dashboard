import { FormInstance } from 'antd';
import { EMessageErrorRequired } from '~/types/enum.type';
import { replacePositionRangeNumber } from './number';

export const messageErrorRequired = (title: string, type?: EMessageErrorRequired) => {
  if (type === EMessageErrorRequired.SELECT) return `${title}を選択してください`;
  return `${title}を入力してください`;
};

export const messageErrorMaxCharacter = (number: number) => {
  return `最大 ${number} 文字です。`;
};

export const numberPreventInput = (
  value: string,
  field: string,
  fixNumber: number,
  form?: FormInstance,
) => {
  if (form) {
    form.setFieldValue(field, replacePositionRangeNumber(value, undefined, undefined, fixNumber));
  }
};
