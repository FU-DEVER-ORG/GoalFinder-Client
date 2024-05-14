import { useEffect, useState } from 'react';

import { constants } from '@/settings';

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

const FormItem = ({ form, currentData }: any) => {
  const [position, setPosition] = useState(initialStatePosition);

  const colorBtnGoalker = position.goalker ? '' : '#d9d9d9';
  const colorBtnDefender = position.defender ? '' : '#d9d9d9';
  const colorBtnStriker = position.striker ? '' : '#d9d9d9';

  const { experience, positionIds, experienceId, address } = currentData;

  useEffect(() => {
    setPosition({
      goalker: positionIds?.includes(constants.GOALDER),
      defender: positionIds?.includes(constants.DEFENDER),
      striker: positionIds?.includes(constants.STRIKER),
    });
  }, [currentData]);

  const HandleClickPositionButton = (name: string) => {
    const NewPosition = {
      ...position,
      [name]: !position[name],
    };
    setPosition(NewPosition);
  };
  return (
    <S.WrapperItem vertical gap={24}>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Tên tài khoản</S.Typography>
        <S.FormItem
          name="nickName"
          rules={[
            {
              validator: async (_: any, name: string) => {
                if (name.includes(' '))
                  return Promise.reject(
                    new Error('Tên tài khoản không được có khoảng trắng!'),
                  );
                if (name.length === 0 && currentData.nickName.length === 0)
                  return Promise.reject(
                    new Error('Tên tài khoản của bạn chưa có!'),
                  );
              },
            },
          ]}
        >
          <S.Input />
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Họ và tên</S.Typography>
        <S.FormItem name="fullName">
          <S.Input />
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Khu vực</S.Typography>
        <S.FlexWrapper justify="space-between">
          <SelectAddress form={form} address={address} />
        </S.FlexWrapper>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Trình độ</S.Typography>
        <S.FormItem name="experienceId" defaultValue={experience}>
          <S.RadioGroup name="ButtonLevel" optionType="button">
            <S.RadioButton value={constants.PROFESSIONAL}>
              Chuyên nghiệp
            </S.RadioButton>
            <S.RadioButton value={constants.AMATEUR}>Nghiệp dư</S.RadioButton>
          </S.RadioGroup>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Vị trí</S.Typography>
        <S.FormItem name="positionIds">
          <S.CheckboxGroup defaultValue={experienceId}>
            <S.Checkbox
              type="checkbox"
              value={constants.GOALDER}
              id="goalker"
            />
            <S.Checkbox
              type="checkbox"
              value={constants.DEFENDER}
              id="defender"
            />
            <S.Checkbox
              type="checkbox"
              value={constants.STRIKER}
              id="striker"
            />
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
          </S.CheckboxGroup>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Thái độ</S.Typography>
        <S.FormItem name="competitionLevelId">
          <S.RadioGroup
            name="ButtonLevel"
            optionType="button"
            buttonStyle="solid"
          >
            <S.RadioButton value={constants.FUNNY}>Vui vẻ</S.RadioButton>
            <S.RadioButton value={constants.MEDIUM}>Vừa phải</S.RadioButton>
            <S.RadioButton value={constants.SERIOUSLY}>
              Nghiêm túc
            </S.RadioButton>
          </S.RadioGroup>
        </S.FormItem>
      </S.Flex>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Giới thiệu</S.Typography>
        <S.FormItem name="description">
          <S.TextAreaInput rows={4} />
        </S.FormItem>
      </S.Flex>
    </S.WrapperItem>
  );
};

export default FormItem;
