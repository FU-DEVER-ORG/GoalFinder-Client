import { Checkbox, Flex } from 'antd';
import { useState } from 'react';

import Input from '@/components/core/common/form/Input';

import Button from '@/components/core/common/Button';
import SelectAddress from '@/components/modules/EditProfile/SelectAddress';

import * as S from './style';

type InterfaceStatePosition = {
  goalker: boolean;
  defender: boolean;
  striker: boolean;
  [key: string]: boolean;
};

const initialStatePosition: InterfaceStatePosition = {
  goalker: false,
  defender: false,
  striker: false,
};
const FormItem = ({ form }: any) => {
  const [position, setPosition] = useState(initialStatePosition);
  const HandleClickPositionButton = (name: string) => {
    const NewPosition = {
      ...position,
      [name]: !position[name],
    };
    setPosition(NewPosition);
  };
  const colorBtnGoalker = position.goalker ? '' : '#d9d9d9';
  const colorBtnDefender = position.defender ? '' : '#d9d9d9';
  const colorBtnStriker = position.striker ? '' : '#d9d9d9';

  return (
    <S.WrapperItem vertical gap={24}>
      <S.FormItem name="inputNickName">
        <S.Typography variant="caption-small">Tên tài khoản</S.Typography>
        <Input />
      </S.FormItem>
      <S.FormItem name="inputFullName">
        <S.Typography variant="caption-small">Họ và tên</S.Typography>
        <Input />
      </S.FormItem>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Khu vực</S.Typography>
        <S.FlexWrapper justify="space-between">
          <SelectAddress form={form} />
        </S.FlexWrapper>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Trình độ</S.Typography>
        <S.FormItem name="level">
          <S.FlexWrapper justify="space-between" gap={24}>
            <S.RadioGroup name="ButtonLevel" optionType="button">
              <S.RadioButton value="professional">Chuyên nghiệp</S.RadioButton>
              <S.RadioButton value="amateur">Nghiệp dư</S.RadioButton>
            </S.RadioGroup>
          </S.FlexWrapper>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Vị trí</S.Typography>
        <S.FormItem name="position">
          <S.CheckboxGroup>
            <S.FlexWrapper justify="space-between" gap={24}>
              <S.Checkbox type="checkbox" value="goalker" id="goalker" />
              <S.Checkbox type="checkbox" value="defender" id="defender" />
              <S.Checkbox type="checkbox" value="striker" id="striker" />
              <S.Label
                htmlFor="goalker"
                $color={colorBtnGoalker}
                onClick={() => HandleClickPositionButton('goalker')}
              >
                <span>Thủ môn</span>
              </S.Label>
              <S.Label
                htmlFor="defender"
                $color={colorBtnDefender}
                onClick={() => HandleClickPositionButton('defender')}
              >
                <span>Hậu vệ</span>
              </S.Label>
              <S.Label
                htmlFor="striker"
                $color={colorBtnStriker}
                onClick={() => HandleClickPositionButton('striker')}
              >
                <span>Tiền đạo</span>
              </S.Label>
            </S.FlexWrapper>
          </S.CheckboxGroup>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Thái độ</S.Typography>
        <S.FormItem name="attitude">
          <S.FlexWrapper justify="space-between" gap={24}>
            <S.RadioGroup
              name="ButtonLevel"
              optionType="button"
              buttonStyle="solid"
            >
              <S.RadioButton value="funny">Vui vẻ</S.RadioButton>
              <S.RadioButton value="seriously">Nghiêm túc</S.RadioButton>
            </S.RadioGroup>
          </S.FlexWrapper>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Giới thiệu</S.Typography>
        <S.FormItem $full>
          <S.TextAreaInput rows={4} />
        </S.FormItem>
      </S.Flex>
      <S.FormItem>
        <Button type="primary" $color="#fff" $width="100%" htmlType="submit">
          Xác nhận
        </Button>
      </S.FormItem>
    </S.WrapperItem>
  );
};

export default FormItem;
