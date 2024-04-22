import { LockOutlined } from '@ant-design/icons';
import { Form } from 'antd';

import Button from '@/components/core/common/Button';
import InputPassword from '@/components/core/common/form/InputPassword';

import * as S from './styles';

const FormItem = Form.Item;

const FormReset = () => {
  return (
    <Form>
      <FormItem>
        <S.Input>
          <InputPassword
            width={'100%'}
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            label="Mật khẩu mới"
          />
          <InputPassword
            width={'100%'}
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            label="Xác nhận mật khẩu mới"
          />
        </S.Input>
      </FormItem>
      <FormItem>
        <Button
          $width={'100%'}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Lưu
        </Button>
      </FormItem>
    </Form>
  );
};

export default FormReset;
