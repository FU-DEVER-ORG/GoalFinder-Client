import { Flex } from 'antd';

import Typography from '../../Typography';

import themeColors from '@/style/themes/default/colors';

import * as S from './phoneNumber';

export default function PhoneNumberByCountry({
  currentInstanceForm,
  nameField,
  isDisable,
  label,
  colorLabel = themeColors.newtral,
  isRequired,
}: {
  currentInstanceForm: any;
  nameField?: string;
  isDisable?: boolean;
  label?: string;
  colorLabel?: string;
  isRequired?: boolean;
}) {
  return (
    <Flex vertical>
      {label && (
        <Typography
          padding="0 0 8px 0"
          variant="body-text-normal"
          color={colorLabel}
        >
          {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}
      <S.PhoneNumberWrapper
        limitMaxLength={15}
        defaultCountry="VN"
        disabled={isDisable}
        value={currentInstanceForm?.getFieldValue(nameField)}
        onChange={(value: string) => {
          currentInstanceForm?.setFieldValue(nameField, value);
        }}
        placeholder="Phone"
      />
    </Flex>
  );
}
