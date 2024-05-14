import { Flex, Form } from 'antd';
import { useEffect, useState } from 'react';

import {
  useGetProfileQuery,
  useUpdateUserMutation,
} from '@/store/services/auth';
import Config from '@/components/modules/EditProfile/message';
import { constants } from '@/settings';
import webStorageClient from '@/utils/webStorageClient';

import ImageWall from '@/components/modules/EditProfile/InputImage';
import FormItem from '@/components/modules/EditProfile/InputItem';
import Button from '@/components/core/common/Button';

import * as S from './style';

type InterfaceData = {
  nickName: string;
  fullName: string;
  experienceId?: string;
  positionIds: Array<string>;
  competitionLevelId?: string;
  description: string;
  avatarUrl: string;
  backgroundUrl: string;
  address: string;
};
const experienceInfors = [
  {
    name: 'Nghiệp dư',
    id: constants.AMATEUR,
  },
  {
    name: 'Chuyên nghiệp',
    id: constants.PROFESSIONAL,
  },
];
const positionInfors = [
  {
    name: 'Hậu vệ',
    id: constants.DEFENDER,
  },
  {
    name: 'Tiền đạo',
    id: constants.STRIKER,
  },
  {
    name: 'Thủ môn',
    id: constants.GOALDER,
  },
];
const competitionLevelInfors = [
  {
    name: 'Vui vẻ',
    id: constants.FUNNY,
  },
  {
    name: 'Vừa phải',
    id: constants.MEDIUM,
  },
  {
    name: 'Nghiêm túc',
    id: constants.SERIOUSLY,
  },
];

const initialData = {
  nickName: '',
  fullName: '',
  experienceId: '',
  positionIds: [''],
  competitionLevelId: '',
  description: '',
  avatarUrl: '',
  backgroundUrl: '',
  address: '',
};

const FormPage = () => {
  const [UpdateUser, { isLoading }] = useUpdateUserMutation();
  const [currentDataUser, setCurrentDataUser] =
    useState<InterfaceData>(initialData);
  const [form] = Form.useForm();

  const config = Config();
  const nickName = webStorageClient.get(constants.USER_NAME);
  const { data } = nickName && useGetProfileQuery(nickName);

  useEffect(() => {
    if (data) {
      const currenntData = data?.body?.userDetail;
      const positionIds: Array<string> = [];
      positionInfors.forEach((position) => {
        if (currenntData.positions.includes(position.name))
          positionIds.push(position.id);
      });
      const experienceId = experienceInfors.find(
        (experience) => experience.name === currenntData?.experience,
      )?.id;

      const competitionLevelId = competitionLevelInfors.find(
        (competitionLevel) =>
          competitionLevel.name === currenntData?.competitionLevel,
      )?.id;

      const newData: InterfaceData = {
        nickName: currenntData.nickName,
        fullName: `${currenntData.firstName} ${currenntData.lastName}`,
        experienceId,
        positionIds,
        competitionLevelId,
        description: currenntData?.description,
        avatarUrl: currenntData?.avatarUrl ?? constants.AVATAR_DEFAULT,
        backgroundUrl: currenntData?.backgroundUrl ?? constants.AVATAR_DEFAULT,
        address: currenntData?.address,
      };
      setCurrentDataUser(newData);
      form.setFieldsValue(newData);
    }
  }, [data]);

  const onFinish = async (values: any) => {
    try {
      const name = values?.fullName?.split(' ');
      const firstName = name?.slice(0, name.length - 1).join(' ');
      const lastName = name?.slice(-1)[0];

      const data: any = {
        nickName: values?.nickName,
        firstName: firstName,
        lastName: lastName,
        backgroundUrl: values?.backgroundUrl,
        avatarUrl: values?.avatarUrl,
        description: values?.description,
        positionIds: values?.positionIds ?? [],
        experienceId: values?.experienceId,
        competitionLevelId: values?.competitionLevelId,
        address:
          values?.province && values?.district && values?.ward
            ? `${values.province} - ${values.district} - ${values.ward}`
            : currentDataUser?.address,
      };
      config.loading();
      await UpdateUser(data).unwrap();
      onFinishSuccess(values?.nickName);
    } catch (err) {
      onFinishFail(err);
    }
  };

  const onFinishSuccess = (nickName: string) => {
    webStorageClient.set(constants.USER_NAME, nickName);
    config.close();
    config.success();
  };

  const onFinishFail = (e: any) => {
    config.close();
  };

  return (
    <>
      {config.contextHolder}
      <S.FormEditWrapper align="center" gap={24} vertical>
        <S.Tittle>Chỉnh sửa thông tin cá nhân</S.Tittle>
        <Form form={form} name="edit form" onFinish={onFinish}>
          <Flex gap={24} vertical>
            <ImageWall
              form={form}
              backgroundUrl={currentDataUser.backgroundUrl}
              avatarUrl={currentDataUser.avatarUrl}
              nickName={nickName}
            />
            <FormItem form={form} currentData={currentDataUser} />
            <div className="btn">
              <Button
                type="primary"
                $color="#fff"
                $width="100%"
                htmlType="submit"
                loading={isLoading}
              >
                Xác nhận
              </Button>
            </div>
          </Flex>
        </Form>
      </S.FormEditWrapper>
    </>
  );
};

export default FormPage;
