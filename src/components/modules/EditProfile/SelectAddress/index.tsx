import { useEffect, useState } from 'react';
import axios from 'axios';
import { DefaultOptionType } from 'antd/es/select';

import { editProfileEndpoint as endPoint } from '@/services/endpoint';

import Select from '@/components/core/common/form/Select';

import * as S from './style';

const HOST = 'https://vapi.vnappmob.com';
const textRemoves: any = {
  province: ['Thành phố ', 'Tỉnh '],
  district: ['Huyện ', 'Quận ', 'Thành phố ', 'Thị xã '],
  ward: ['Thị trấn ', 'Xã ', 'Thị xã ', 'Phường '],
};

interface optionType extends DefaultOptionType {
  label?: string;
  value?: number;
}
const initialStateData: optionType = {
  province: [],
  district: [],
  ward: [],
};
const SelectAddress = () => {
  const [id, SetId] = useState(initialStateData);
  const [option, setOption] = useState(initialStateData);
  const removeUselessText = (text: string, listTextRemove: Array<string>) => {
    const newText = listTextRemove.reduce(
      (result: string, textRemove: string) => result.replace(textRemove, ''),
      text,
    );
    return newText;
  };
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
            textRemoves[type],
          );
          return { value: vn[`${type}_id`], label: label };
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
  return (
    <>
      <S.FormItem name="city">
        <Select
          onChange={(id: number) => {
            GetRequest('district', setEndPoint(endPoint.DISTRICT, id));
          }}
          placeholder="Tỉnh/ Thành phố"
          options={option.province}
        ></Select>
      </S.FormItem>
      <S.FormItem name="district">
        <Select
          onChange={(id: number) => {
            GetRequest('ward', setEndPoint(endPoint.WARD, id));
          }}
          placeholder="Huyện/ Quận"
          options={option.district}
        ></Select>
      </S.FormItem>
      <S.FormItem name="ward">
        <Select placeholder="Xã/ Đường" options={option.ward}></Select>
      </S.FormItem>
    </>
  );
};

export default SelectAddress;
