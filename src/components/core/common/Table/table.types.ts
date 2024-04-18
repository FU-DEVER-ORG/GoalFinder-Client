import type { ColumnsType } from 'antd/es/table';
import { ReactNode } from 'react';
export type FieldType =
  | 'email'
  | 'password'
  | 'text'
  | 'number'
  | 'phone'
  | 'radio'
  | 'checkbox'
  | 'select'
  | 'file'
  | 'date'
  | 'time'
  | 'rangeDateTime'
  | 'switch';

export interface RulesField {
  required?: boolean;
  message: string;
  pattern?: RegExp;
}

export interface Field {
  nameField: string;
  typeField: FieldType;
  labelField?: string;
  placeholderField?: string;
  rulesField?: RulesField[];
  prefix?: ReactNode;
  suffix?: ReactNode;
  isGroup?: boolean;
  defaultOptionValue?: { label: string; value: any };
  optionCheckbox?: { label: string; value: any }[];
  optionSelect?: {
    initValues: { label: string; value: any }[];
    api?: {
      endpoint: string;
      keyLabel: string;
      keyValue: string;
      params?: { nameFieldGetValue: string; nameFieldParam: string };
    };
  };
}

interface Actions {
  titleColumnActions?: string;
  widthColumnActions?: string | number;
  add?: {
    title: string;
    icon?: ReactNode | string;
    endpoint: string;
    fields: Field[];
    initForm?: any;
    redirect?: string;
    idParent?: { nameField: string; value: any }[];
  };
  edit?: {
    title: string;
    icon?: ReactNode | string;
    endpoint: string;
    fields: Field[];
    initForm?: any;
    convertData?: any;
    redirect?: string;
    redirectParams?: { nameField: string; nameValue?: any; value?: any }[];
    idParent?: { nameField: string; value: any }[];
  };
  remove?: {
    title: string;
    icon?: ReactNode | string;
    endpoint: string;
    fields?: Field[];
  };
  viewMore?: {
    icon?: ReactNode | string;
    href?: string;
    popover: string;
    redirectParams?: {
      nameField: string;
      nameValue?: any;
      value?: any;
      nameParentValue?: string;
    }[];
  }[];
  toggleStatus?: {
    icon?: ReactNode | string;
    endpoint: string;
    twoValuesToggle: {
      enableValue: any;
      disableValue: any;
    };
  };
}

export interface Filter {
  id: string;
  key: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  prefix?: ReactNode;
  optionSelect?: {
    initValues: { label: string; value: any }[];
    api?: {
      endpoint: string;
      keyLabel: string;
      keyValue: string;
    };
  };
}

export interface TableSchema {
  translator: string;
  title?: string;
  endpoint: string;
  initFormData?: any;
  params?: {
    populate?: string;
    limit?: number;
  };
  columns: ColumnsType<any>;
  actions?: Actions;
  filters?: Filter[];
  isShowPagination?: boolean;
}
