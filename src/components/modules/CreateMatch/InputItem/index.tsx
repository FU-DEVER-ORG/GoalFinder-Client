import Button from '@/components/core/common/Button';
import Datepicker from '@/components/core/common/form/Datepicker';
import SelectAddress from '../../EditProfile/SelectAddress';

import * as S from './style';
import * as SS from '../../EditProfile/InputItem/style'


const FormItem = ({ form }: any) => {
  return (
    <SS.WrapperItem vertical gap={24}>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Tiêu đề</SS.Typography>
        <div className="full">
          <SS.Input placeholder='Nhập tiêu đề'/>
        </div>
      </SS.FormItem>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Thời gian</SS.Typography>
        <SS.FlexWrapper>
          <S.Timepicker placeholder="Giờ" type="range" />
          <Datepicker placeholder="Ngày" />
        </SS.FlexWrapper>
      </SS.FormItem>
      <SS.Flex justify="space-between" align="center">
        <SS.Typography variant="caption-small">Khu vực</SS.Typography>
        <SS.FlexWrapper justify="space-between">
          <SelectAddress form={form} />
        </SS.FlexWrapper>
      </SS.Flex>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Địa điểm</SS.Typography>
        <div className="full">
          <SS.Input placeholder='Nhập địa điểm'/>
        </div>
      </SS.FormItem>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Số lượng</SS.Typography>
        <div className="full">
          <SS.Input type="number" placeholder='Số lượng cầu thủ'/>
        </div>
      </SS.FormItem>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Cạnh tranh</SS.Typography>
        <div className="full">
          <S.Select
            options={[
              { value: 'vuive', label: 'Vui vẻ' },
              { value: 'nghiemtuc', label: 'Nghiêm túc' },
            ]}
            defaultValue={'vuive'}
          ></S.Select>
        </div>
      </SS.FormItem>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Tiền sân</SS.Typography>
        <div className="full">
          <SS.Input type="number" placeholder='Nhập số tiền'/>
        </div>
      </SS.FormItem>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Mô tả thêm</SS.Typography>
        <div className="full">
        <S.TextAreaInput className="ant-input" placeholder='Nhập mô tả...'/>
        </div>
      </SS.FormItem>
      <SS.FormItem>
        <SS.Typography variant="caption-small">Uy tín tối thiểu</SS.Typography>
        <div className="full">
          <SS.Input type="number" placeholder='Nhập uy tín'/>
        </div>
      </SS.FormItem>
      <SS.FormItem>
        <Button type="primary" $color="#fff" $width="100%" htmlType="submit">
          Xác nhận
        </Button>
      </SS.FormItem>
    </SS.WrapperItem>
  );
};

export default FormItem;
