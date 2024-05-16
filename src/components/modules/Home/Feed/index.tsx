'use client';

import { FC } from 'react';
import moment from 'moment';
import { Avatar } from 'antd';

import Button from '@/components/core/common/Button';

import { MenuItem } from '@/model/entites/Feed';

import * as S from './styles';

interface FeedProps {
  data: MenuItem;
}

const Feed: FC<FeedProps> = ({ data }) => {
  return (
    <S.FeedContainer>
        <S.UserInfor>
          <Avatar src="/images/layout/avatar.jpeg" size={40} />
          <S.CustomFlex vertical>
            <S.Name>{data?.hostName}</S.Name>
            <S.FlexPrestige>
              <S.CustomCrownFilled />
              <S.PrestigeScore>100 Uy tín</S.PrestigeScore>
            </S.FlexPrestige>
          </S.CustomFlex>
          <S.CustomEllipsisOutlined />
        </S.UserInfor>
      <S.FlexMatchInfor>
        <S.TitleMatchInfor>{data?.title}</S.TitleMatchInfor>
        <S.ListMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Thời gian:</S.BoldText>
              <S.NoneBoldText>
                {moment(data?.startTime).format('LT')} |{' '}
                {moment(data?.startTime).format('L')}
              </S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Địa điểm:</S.BoldText>
              <S.NoneBoldText>{data?.pitchAddress}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Cạnh tranh:</S.BoldText>
              <S.NoneBoldText>{data?.competitionLevel}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Khu vực:</S.BoldText>
              <S.NoneBoldText>{data?.address}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Số lượng:</S.BoldText>
              <S.NoneBoldText>{data?.maxMatchPlayersNeed} người</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Tiền sân:</S.BoldText>
              <S.NoneBoldText>{data?.pitchPrice ? data?.pitchPrice.toLocaleString('vi-VN') + ' ' + "VNĐ" : 'N/A'}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
        </S.ListMatchInfor>
      </S.FlexMatchInfor>
      <S.ContainerDescription>
        <S.TitleDescription>Mô tả thêm:</S.TitleDescription>
        <S.Description>{data?.description}</S.Description>
      </S.ContainerDescription>
      {
        data?.isRegister ?
          (
            data?.isAccepted ?
              <Button $width={'100%'} type="primary" disabled>Đã vào kèo</Button>
              :
              <Button $width={'100%'}>Huỷ đăng ký</Button>
          )
          :
          <S.RegisterButton $width={'100%'} type='primary'>
            <S.RegisterButtonContainer>
              <S.TitleTextButton>Đăng ký</S.TitleTextButton>
              <S.RequirementText>(Tối thiểu {data?.minPrestigeScore} uy tín)</S.RequirementText>
            </S.RegisterButtonContainer>
          </S.RegisterButton>
      }
    </S.FeedContainer>
  );
}

export default Feed;
