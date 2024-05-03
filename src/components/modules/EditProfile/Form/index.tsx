import { Flex, Form, Modal } from 'antd';

import { useUpdateUserMutation } from '@/store/services/auth';
import { config } from '@/components/modules/EditProfile/modal';

import ImageWall from '@/components/modules/EditProfile/InputImage';
import FormItem from '@/components/modules/EditProfile/InputItem';
import Loading from '@/components/modules/EditProfile/loading';

import * as S from './style';

const FormPage = () => {
  const [UpdateUser, { isLoading }] = useUpdateUserMutation();

  const [form] = Form.useForm();

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
    // console.log('data', data);
    const res: any = await UpdateUser(data);
    if (res?.error) onFinishFail(res?.error);
    else onFinishSuccess();
  };

  const onFinishSuccess = () => {
    const data = {
      title: 'Cập nhật thông tin thành công',
      text: 'Nhâp ok để chuyển về trang cá nhân',
    };
    Modal.success(config(data));
  };

  const onFinishFail = (e: any) => {
    const data = {
      title: 'Không thể cập nhập thông tin',
      text: e.error,
    };
    Modal.error(config(data));
  };

  return (
    <>
      <Loading $isLoading={isLoading} $fixed />
      <S.FormEditWrapper align="center" gap={24} vertical>
        <S.Tittle>Chỉnh sửa thông tin cá nhân</S.Tittle>
        <Form form={form} name="edit form" onFinish={onFinish}>
          <Flex gap={24} vertical>
            <ImageWall form={form} />
            <FormItem form={form} />
          </Flex>
        </Form>
      </S.FormEditWrapper>
    </>
  );
};

export default FormPage;
