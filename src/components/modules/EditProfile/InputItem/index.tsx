import { Flex, Form } from 'antd';

import Input from '@/components/core/common/form/Input';
import Typography from '@/components/core/common/Typography';
import Select from '@/components/core/common/form/Select';

import * as S from './style';
import Button from '@/components/core/common/Button';

const FormItem = () => {
  return (
    <S.WrapperItem vertical gap={24}>
      <S.FormItem>
        <Input label="Tên tài khoản" />
      </S.FormItem>
      <S.FormItem>
        <Input label="Họ và tên" />
      </S.FormItem>

      <Flex justify="space-between" align="center">
        <Typography variant="caption-small">Khu vực</Typography>
        <S.FlexWrapper justify="space-between">
          <S.FormItem>
            <Select mode="multiple" placeholder="Tỉnh/ Thành phố"></Select>
          </S.FormItem>
          <S.FormItem>
            <Select mode="multiple" placeholder="Huyện/ Quận"></Select>
          </S.FormItem>
          <S.FormItem>
            <Select mode="multiple" placeholder="Xã/ Đường"></Select>
          </S.FormItem>
        </S.FlexWrapper>
      </Flex>
      <Flex justify="space-between" align="center">
        <Typography variant="caption-small">Trình độ</Typography>
        <S.FormItem>
          <S.FlexWrapper justify="space-between" gap={24}>
            <Button $color="#d9d9d9" $borderColor="#d9d9d9" $width="100%">
              Chuyên nghiệp
            </Button>
            <Button $color="#d9d9d9" $borderColor="#d9d9d9" $width="100%">
              Nghiệp dư
            </Button>
          </S.FlexWrapper>
        </S.FormItem>
      </Flex>
      <Flex justify="space-between" align="center">
        <Typography variant="caption-small">Vị trí sở trường</Typography>
        <S.FlexWrapper justify="space-between" gap={10}>
          <S.FormItem $full>
            <Button $color="#d9d9d9" $borderColor="#d9d9d9" $width="100%">
              Thủ môn
            </Button>
          </S.FormItem>
          <S.FormItem $full>
            <Button $color="#d9d9d9" $borderColor="#d9d9d9" $width="100%">
              Hậu vệ
            </Button>
          </S.FormItem>
          <S.FormItem $full>
            <Button $color="#d9d9d9" $borderColor="#d9d9d9" $width="100%">
              Tiền đạo
            </Button>
          </S.FormItem>
        </S.FlexWrapper>
      </Flex>
      <Flex justify="space-between" align="center">
        <Typography variant="caption-small">Trình độ</Typography>
        <S.FormItem>
          <S.FlexWrapper justify="space-between" gap={24}>
            <Button $color="#d9d9d9" $borderColor="#d9d9d9" $width="100%">
              Vui vẻ
            </Button>
            <Button $color="#d9d9d9" $borderColor="#d9d9d9" $width="100%">
              Nghiêm túc
            </Button>
          </S.FlexWrapper>
        </S.FormItem>
      </Flex>
      <Flex justify="space-between" align="center">
        <Typography variant="caption-small">Giới thiệu</Typography>
        <S.FormItem $full>
          <S.TextAreaInput rows={4} />
        </S.FormItem>
      </Flex>
      <Button type="primary" $color="#fff" $width="100%" htmlType="submit">
        Xác nhận
      </Button>
    </S.WrapperItem>
  );
};

export default FormItem;
