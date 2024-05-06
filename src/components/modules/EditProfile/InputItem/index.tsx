import { Checkbox, Flex } from 'antd';
import { useState } from 'react';

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

const funny = '02569b52-d331-4b39-a89b-737cc0c55b13';
const medium = '0a0a9174-e2ab-49ca-943f-dc62c26eb032';
const seriously = '67c22803-9fef-45e4-9f93-184db1a15458';
const nullValue = 'aa403b53-5ae7-4e50-8b02-92dce06ed1a9';
const professional = '8e9bd942-4472-4c19-bdd4-8bab0d6346e2';
const amateur = 'c99b2f00-cf5a-468f-a0ae-31cd95fecce6';
const striker = '126aad71-81e0-4e56-8d74-c1d3f3e9b8c0';
const defender = '697ed101-07cb-4745-a80f-488e695c830a';
const goalker = '1e057224-2d18-459d-af0d-146c4c7d3a65';

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
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Tên tài khoản</S.Typography>
        <S.FormItem name="userName">
          <div className="full">
            <S.Input />
          </div>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Họ và tên</S.Typography>
        <S.FormItem name="fullName">
          <div className="full">
            <S.Input />
          </div>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Khu vực</S.Typography>
        <S.FlexWrapper justify="space-between">
          <SelectAddress form={form} />
        </S.FlexWrapper>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Trình độ</S.Typography>
        <S.FormItem name="experienceId">
          <S.FlexWrapper justify="space-between">
            <S.RadioGroup name="ButtonLevel" optionType="button">
              <S.RadioButton value={professional}>Chuyên nghiệp</S.RadioButton>
              <S.RadioButton value={amateur}>Nghiệp dư</S.RadioButton>
            </S.RadioGroup>
          </S.FlexWrapper>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Vị trí</S.Typography>
        <S.FormItem name="positionIds">
          <S.CheckboxGroup>
            <S.FlexWrapper justify="space-between">
              <S.Checkbox type="checkbox" value={goalker} id="goalker" />
              <S.Checkbox type="checkbox" value={defender} id="defender" />
              <S.Checkbox type="checkbox" value={striker} id="striker" />
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
        <S.FormItem name="competitionLevelId">
          <S.FlexWrapper justify="space-between" gap={24}>
            <S.RadioGroup
              name="ButtonLevel"
              optionType="button"
              buttonStyle="solid"
              defaultValue={nullValue}
            >
              <S.RadioButton value={funny}>Vui vẻ</S.RadioButton>
              <S.RadioButton value={medium}>Vừa phải</S.RadioButton>
              <S.RadioButton value={seriously}>Nghiêm túc</S.RadioButton>
            </S.RadioGroup>
          </S.FlexWrapper>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Giới thiệu</S.Typography>
        <S.FormItem $full name="description">
          <div className="containerTextArea">
            <S.TextAreaInput rows={4} />
          </div>
        </S.FormItem>
      </S.Flex>
    </S.WrapperItem>
  );
};

export default FormItem;
