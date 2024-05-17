import {
  ColProps,
  DatePickerProps,
  FormInstance,
  FormItemProps,
  InputProps,
  RadioGroupProps,
  SelectProps,
  UploadFile,
  UploadProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { RangePickerProps } from 'antd/es/date-picker';
import { PasswordProps, TextAreaProps } from 'antd/es/input';
import { RefObject } from 'react';
import { EGroupFormOption, ETypeFieldForm } from './enum.type';

interface ICustomMappedFormItems {
  length?: number;
  isDisable?: boolean;
  ref?: RefObject<any>;
}

interface ICustomInputNumber extends InputProps {
  formcontrol: FormInstance;
}
interface ICustomUpload extends UploadProps {
  initialFileList: UploadFile<any>[];
  setUrlFile: (file: string | undefined) => void;
}

export interface IAtomFormItemsProps {
  [ETypeFieldForm.TEXT_FIELD]: InputProps;
  [ETypeFieldForm.SELECT]: SelectProps;
  [ETypeFieldForm.DATEPICKER]: DatePickerProps;
  [ETypeFieldForm.CHECKBOX]: CheckboxGroupProps;
  [ETypeFieldForm.RADIO]: RadioGroupProps;
  [ETypeFieldForm.RANGE_DATE]: RangePickerProps;
  [ETypeFieldForm.TEXT_AREA]: TextAreaProps;
  [ETypeFieldForm.UPLOAD]: ICustomUpload;
  [ETypeFieldForm.PASSWORD]: PasswordProps;
  [ETypeFieldForm.INPUT_NUMBER]: ICustomInputNumber;
}

export type TMappedFormItems = {
  [K in keyof IAtomFormItemsProps]: {
    type: K;
    atomProps?: IAtomFormItemsProps[K];
    colProps?: ColProps;
  } & FormItemProps;
}[keyof IAtomFormItemsProps] &
  ICustomMappedFormItems;

export interface IMFormItemProps<T extends ETypeFieldForm> extends Omit<TMappedFormItems, 'type'> {
  type: T;
  atomProps?: IAtomFormItemsProps[T];
}

export interface IFormOption {
  id?: number;
  username?: string;
  phoneNumber?: number;
  email?: string;
  group_id?: EGroupFormOption;
  company_name?: string;
  site_url?: string;
  job_detail_url?: string;
  explanation_content?: string;
}
