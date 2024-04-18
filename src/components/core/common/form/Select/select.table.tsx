import { useCallback, useEffect, useState } from 'react';
import { DefaultOptionType } from 'antd/es/select';
import { SelectProps } from 'antd';
import Typography from '../../Typography';

import { getRequest } from '@/services/requests';
import themeColors from '@/styles/themes/default/colors';

import * as S from './select.styles';

export interface SelectPropsInterface extends SelectProps {
  label?: string;
  prefixIcon?: React.ReactNode;
  isRequired?: boolean;
  colorLabel?: string;
  api?: {
    endpoint: string;
    keyLabel: string;
    keyValue: string;
  };
}

function Select({
  api,
  options,
  label,
  prefixIcon,
  isRequired = false,
  colorLabel = themeColors.newtral,
  ...rest
}: SelectPropsInterface) {
  const [dataOptions, setDataOptions] = useState<DefaultOptionType[]>(
    options || [],
  );
  const getOptionsValue = useCallback(async () => {
    try {
      if (!api) {
        throw new Error('Missing api');
      }

      const response: any = await getRequest(api?.endpoint);

      const rawData = response?.data?.docs || [];

      const convertRawDataToOptions = rawData?.map((item: any) => ({
        label: item?.[api.keyLabel] || null,
        value: item?.[api.keyValue] || null,
      }));

      setDataOptions(convertRawDataToOptions);
    } catch (error) {
      //
    }
  }, [api]);

  useEffect(() => {
    getOptionsValue();
  }, [getOptionsValue]);

  return (
    <S.WrapSelect>
      {label && (
        <Typography
          padding="0 0 8px 0"
          variant="caption-small"
          color={colorLabel}
        >
          {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}
      {prefixIcon && <S.PrefixIcon>{prefixIcon}</S.PrefixIcon>}
      <S.Select
        options={dataOptions}
        $isPrefixIcon={prefixIcon ? true : false}
        {...rest}
      />
    </S.WrapSelect>
  );
}

export default Select;
