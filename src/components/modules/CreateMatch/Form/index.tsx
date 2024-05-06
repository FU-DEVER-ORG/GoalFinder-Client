import { Flex, Form } from 'antd';

import FormItem from '@/components/modules/CreateMatch/InputItem';

import * as S from './style';

const FormPage = () => {
  const [form] = Form.useForm();
  return (
    <S.FormEditWrapper align="center" gap={24} vertical>
      <S.Tittle>Tạo kèo của bạn</S.Tittle>
      <Form
        form={form}
        name="edit form"
        onFinish={(e: any) => {
          console.log('e', e);
        }}
      >
        <Flex gap={24} vertical>
          <FormItem form={form} />
        </Flex>
      </Form>
    </S.FormEditWrapper>
  );
};

export default FormPage;
