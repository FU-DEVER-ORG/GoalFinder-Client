import { useEffect, useState } from 'react';
import axios from 'axios';
import { DefaultOptionType } from 'antd/es/select';
import type { SelectProps } from 'antd';

import { editProfileEndpoint as endPoint } from '@/services/endpoint';

import * as S from './style';

const HOST = 'https://vapi.vnappmob.com';
const textRemoves: any = {
  province: ['Thành phố ', 'Tỉnh '],
  district: ['Huyện ', 'Quận ', 'Thành phố ', 'Thị xã '],
  ward: ['Thị trấn ', 'Xã ', 'Thị xã ', 'Phường '],
};

interface optionType extends DefaultOptionType {
  label?: string;
  value?: string;
  id?: number;
}
type InterFaceinitialStateValue = {
  province: string;
  district: string;
  ward: string;
};

const initialStateData: optionType = {
  province: [],
  district: [],
  ward: [],
};
const initialStateValue: InterFaceinitialStateValue = {
  province: '',
  district: '',
  ward: '',
};
const SelectAddress = ({ form, address }: any) => {
  const [value, setValue] = useState(initialStateValue);
  const [option, setOption] = useState(initialStateData);

  const removeUselessText = (text: string, textRemove: string) => {
    const newText =
      text.length > 10 ? text.replace(`${textRemove} `, '') : text;
    return newText;
  };

  const filterOption: SelectProps<optionType>['filterOption'] = (
    input,
    option,
  ) =>
    typeof option?.label === 'string' &&
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const setEndPoint = (endPoint: string, id: number) => {
    return `${endPoint}/${id}`;
  };
  const GetRequest = (type: string, url: string) => {
    axios
      //
      .get(`${HOST}/${url}`)
      .then(({ data }) => {
        const newOption = data?.results.map((vn: any) => {
          const label = removeUselessText(
            vn[`${type}_name`],
            vn[`${type}_type`],
          );
          return {
            value: vn[`${type}_name`],
            label: label,
            id: vn[`${type}_id`],
          };
        });
        setOption({
          ...option,
          [type]: newOption,
        });
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    GetRequest('province', endPoint.PROVINCE);
  }, []);
  useEffect(() => {
    const [province, district, ward] = address?.split(' - ') ?? [];
    if (province && district && ward) {
      GetRequest(
        'district',
        setEndPoint(
          endPoint.DISTRICT,
          option?.province?.find(
            ({ value }: { value: string }) => value == province,
          )?.id,
        ),
      );
      setValue({
        district,
        province,
        ward,
      });
    }
  }, [address]);
  useEffect(() => {
    const { district } = value;
    GetRequest(
      'ward',
      setEndPoint(
        endPoint.WARD,
        option?.district?.find(
          ({ value }: { value: string }) => value == district,
        )?.id,
      ),
    );
  }, [option.district]);

  return (
    <>
      <S.FormItem name="province">
        <S.FormItem name="district">
          <S.FormItem name="ward" value={value.ward}></S.FormItem>
        </S.FormItem>
      </S.FormItem>
      <S.FlexWrapper>
        <div className="containerSelect">
          <S.Select
            $isValue={!!value.province}
            allowClear
            showSearch
            optionFilterProp="children"
            onChange={(valueProvince: string) => {
              GetRequest(
                'district',
                setEndPoint(
                  endPoint.DISTRICT,
                  option.province.find(
                    (province: any) => province.value == valueProvince,
                  )?.id,
                ),
              );
              if (value.province)
                setValue({
                  ...initialStateValue,
                  province: valueProvince,
                });
              else setValue({ ...value, province: valueProvince });
            }}
            filterOption={filterOption}
            value={value.province}
            placeholder="Tỉnh/ Thành phố"
            options={option.province}
          ></S.Select>
        </div>
        <div className="containerSelect">
          <S.Select
            $isValue={!!value.district}
            value={value.district}
            allowClear
            showSearch
            optionFilterProp="children"
            onChange={(valueDistrict: string) => {
              GetRequest(
                'ward',
                setEndPoint(
                  endPoint.WARD,
                  option.district.find(
                    (district: any) => district.value == valueDistrict,
                  )?.id,
                ),
              );
              if (value.district)
                setValue({
                  ...initialStateValue,
                  province: value.province,
                  district: valueDistrict,
                });
              else setValue({ ...value, district: valueDistrict });
            }}
            filterOption={filterOption}
            placeholder="Huyện/ Quận"
            options={option.district}
          ></S.Select>
        </div>
        <div className="containerSelect">
          <S.Select
            $isValue={!!value.ward}
            value={value.ward}
            onChange={(valueWard) => {
              form.setFieldsValue({ ...value, ward: valueWard });
              setValue({ ...value, ward: valueWard });
            }}
            allowClear
            showSearch
            optionFilterProp="children"
            placeholder="Xã/ Đường"
            filterOption={filterOption}
            options={option.ward}
          ></S.Select>
        </div>
      </S.FlexWrapper>
    </>
  );
};

export default SelectAddress;
