import { Flex, Form } from 'antd';

import ImageWall from '../ImageWall';

import * as S from './style';
import FormItem from '../InputItem';

const FormPage = () => {
  const [form] = Form.useForm();
  return (
    <S.FormEditWrapper align="center" gap={24} vertical>
      <S.Tittle>Chỉnh sửa thông tin cá nhân</S.Tittle>
      <Form
        form={form}
        name="edit form"
        onFinish={(values : any) => {
          console.log('e', values);
        }}
      >
        <Flex gap={24} vertical>
          <ImageWall />
          <FormItem></FormItem>
        </Flex>
      </Form>
    </S.FormEditWrapper>
  );
};

export default FormPage;
