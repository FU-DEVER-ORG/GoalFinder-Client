import { Flex, Form } from 'antd';

import { useGetUserQuery, useUpdateUserMutation } from '@/store/services/auth';
import Config from '@/components/modules/EditProfile/message';
import { constants } from '@/settings';
import webStorageClient from '@/utils/webStorageClient';

import ImageWall from '@/components/modules/EditProfile/InputImage';
import FormItem from '@/components/modules/EditProfile/InputItem';

import * as S from './style';
import Button from '@/components/core/common/Button';
import { useState } from 'react';

const FormPage = () => {
  const [UpdateUser, { isLoading }] = useUpdateUserMutation();
  const userName = webStorageClient.get(constants.USER_NAME);
  const data = useGetUserQuery('/match');
  console.log('data', data);

  const [form] = Form.useForm();
  const config = Config();

  const onFinish = async (values: any) => {
    const name = values?.fullName?.split(' ');
    const firstName = name?.slice(0, name.length - 1).join(' ') ?? '';
    const lastName = name?.slice(-1)[0];
    const data: any = {
      userName: values?.userName ?? '',
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      backgroundUrl: values?.backgroundURL ?? '',
      avatarUrl: values?.avatarURL ?? '',
      description: values?.description ?? '',
      positionIds: values?.positionIds ?? [],
      experienceId: values?.experienceId ?? '',
      competitionLevelId: values?.competitionLevelId ?? '',
      address: `${values.province}<token>${values.district}<token>${values.ward}`,
    };
    config.loading();
    const res: any = await UpdateUser(data);
    if (res?.error) onFinishFail(res?.error);
    else onFinishSuccess();
  };

  const onFinishSuccess = () => {
    config.close();
    config.success();
  };

  const onFinishFail = (e: any) => {
    config.close();
    config.error();
  };

  return (
    <>
      {config.contextHolder}
      <S.FormEditWrapper align="center" gap={24} vertical>
        <S.Tittle>Chỉnh sửa thông tin cá nhân</S.Tittle>
        <Form form={form} name="edit form" onFinish={onFinish}>
          <Flex gap={24} vertical>
            <ImageWall form={form} />
            <FormItem form={form} />
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
