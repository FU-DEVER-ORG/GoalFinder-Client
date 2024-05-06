import Button from '@/components/core/common/Button';
import SelectAddress from '@/components/modules/CreateMatch/SelectAddress';
import Datepicker from '@/components/core/common/form/Datepicker';

import * as S from './style';

const FormItem = ({ form }: any) => {
  return (
    <S.WrapperItem vertical gap={24}>
      <S.FormItem>
        <S.Typography variant="caption-small">Tiêu đề</S.Typography>
        <div className="full">
          <S.Input placeholder='Nhập tiêu đề'/>
        </div>
      </S.FormItem>
      <S.FormItem>
        <S.Typography variant="caption-small">Thời gian</S.Typography>
        <S.FlexWrapper>
          <S.Timepicker placeholder="Giờ" type="range" />
          <Datepicker placeholder="Ngày" />
        </S.FlexWrapper>
      </S.FormItem>
      <S.Flex justify="space-between" align="center">
        <S.Typography variant="caption-small">Khu vực</S.Typography>
        <S.FlexWrapper justify="space-between">
          <SelectAddress form={form} />
        </S.FlexWrapper>
      </S.Flex>
      <S.FormItem>
        <S.Typography variant="caption-small">Địa điểm</S.Typography>
        <div className="full">
          <S.Input placeholder='Nhập địa điểm'/>
        </div>
      </S.FormItem>
      <S.FormItem>
        <S.Typography variant="caption-small">Số lượng</S.Typography>
        <div className="full">
          <S.Input type="number" placeholder='Số lượng cầu thủ'/>
        </div>
      </S.FormItem>
      <S.FormItem>
        <S.Typography variant="caption-small">Cạnh tranh</S.Typography>
        <div className="full">
          <S.Select
            options={[
              { value: 'vuive', label: 'Vui vẻ' },
              { value: 'nghiemtuc', label: 'Nghiêm túc' },
            ]}
            defaultValue={'vuive'}
          ></S.Select>
        </div>
      </S.FormItem>
      <S.FormItem>
        <S.Typography variant="caption-small">Tiền sân</S.Typography>
        <div className="full">
          <S.Input type="number" placeholder='Nhập số tiền'/>
        </div>
      </S.FormItem>
      <S.FormItem>
        <S.Typography variant="caption-small">Mô tả thêm</S.Typography>
        <div className="full">
        <S.TextAreaInput className="ant-input" placeholder='Nhập mô tả...'/>
        </div>
      </S.FormItem>
      <S.FormItem>
        <S.Typography variant="caption-small">Uy tín tối thiểu</S.Typography>
        <div className="full">
          <S.Input type="number" placeholder='Nhập uy tín'/>
        </div>
      </S.FormItem>
      <S.FormItem>
        <Button type="primary" $color="#fff" $width="100%" htmlType="submit">
          Xác nhận
        </Button>
      </S.FormItem>
    </S.WrapperItem>
  );
};

export default FormItem;
