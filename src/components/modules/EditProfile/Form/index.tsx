import { Flex, Form } from 'antd';

import ImageWall from '@/components/modules/EditProfile/ImageWall';
import FormItem from '@/components/modules/EditProfile/InputItem';

import * as S from './style';

const FormPage = () => {
  const [form] = Form.useForm();
  return (
    <S.FormEditWrapper align="center" gap={24} vertical>
      <S.Tittle>Chỉnh sửa thông tin cá nhân</S.Tittle>
      <Form
        form={form}
        name="edit form"
        onFinish={() => {
          console.log('e', form.getFieldsValue());
        }}
      >
        <Flex gap={24} vertical>
          <ImageWall />
          <FormItem form={form} />
        </Flex>
      </Form>
    </S.FormEditWrapper>
  );
};

export default FormPage;
