'use client';

import { FC } from 'react';
import moment from 'moment';
import { Avatar } from 'antd';

import Button from '@/components/core/common/Button';

import * as S from './styles';

interface MenuItem {
  name?: string;
  prestigeScore?: number;
  label?: string;
  date?: string;
  location?: string;
  competition?: string;
  area?: string;
  quantity?: string;
  money?: string;
  description?: string;
  isRegister?: boolean;
  isAccepted?: boolean;
  href?: string;
}

interface FeedProps {
  data: MenuItem;
}

const Feed: FC<FeedProps> = ({data}) =>{
    return (
      <S.FeedContainer>
        <S.UserInfor>
          <Avatar src="/images/layout/avatar.jpeg" size={40} />
          <S.CustomFlex vertical>
            <S.Name>{data.name}</S.Name>
            <S.FlexPrestige>
              <S.CustomCrownFilled />
              <S.PrestigeScore>{data.prestigeScore} Uy tín</S.PrestigeScore>
            </S.FlexPrestige>
          </S.CustomFlex>
          <S.CustomEllipsisOutlined />
        </S.UserInfor>
        <S.FlexMatchInfor>
          <S.TitleMatchInfor>{data.label}</S.TitleMatchInfor>
          <S.ListMatchInfor>
            <S.ItemMatchInfor>
              <S.FlexBoxTextItem>
                <S.BoldText>Thời gian:</S.BoldText>
                <S.NoneBoldText>
                  {moment(data.date).format('LT')} |{' '}
                  {moment(data.date).format('L')}
                </S.NoneBoldText>
              </S.FlexBoxTextItem>
            </S.ItemMatchInfor>
            <S.ItemMatchInfor>
              <S.FlexBoxTextItem>
                <S.BoldText>Địa điểm:</S.BoldText>
                <S.NoneBoldText>{data.location}</S.NoneBoldText>
              </S.FlexBoxTextItem>
            </S.ItemMatchInfor>
            <S.ItemMatchInfor>
              <S.FlexBoxTextItem>
                <S.BoldText>Cạnh tranh:</S.BoldText>
                <S.NoneBoldText>{data.competition}</S.NoneBoldText>
              </S.FlexBoxTextItem>
            </S.ItemMatchInfor>
            <S.ItemMatchInfor>
              <S.FlexBoxTextItem>
                <S.BoldText>Khu vực:</S.BoldText>
                <S.NoneBoldText>{data.area}g</S.NoneBoldText>
              </S.FlexBoxTextItem>
            </S.ItemMatchInfor>
            <S.ItemMatchInfor>
              <S.FlexBoxTextItem>
                <S.BoldText>Số lượng:</S.BoldText>
                <S.NoneBoldText>{data.quantity}</S.NoneBoldText>
              </S.FlexBoxTextItem>
            </S.ItemMatchInfor>
            <S.ItemMatchInfor>
              <S.FlexBoxTextItem>
                <S.BoldText>Tiền sân:</S.BoldText>
                <S.NoneBoldText>{data.money}</S.NoneBoldText>
              </S.FlexBoxTextItem>
            </S.ItemMatchInfor>
          </S.ListMatchInfor>
        </S.FlexMatchInfor>
        <S.ContainerDescription>
          <S.TitleDescription>Mô tả thêm:</S.TitleDescription>
          <S.Description>{data.description}</S.Description>
        </S.ContainerDescription>
        {
          data.isRegister ?
            (
              data.isAccepted ?
                <Button $width={'100%'} type="primary" disabled>Đã vào kèo</Button>
                :
                <Button $width={'100%'}>Huỷ đăng ký</Button>
            )
            :
            <S.RegisterButton $width={'100%'} type='primary'>
              <S.RegisterButtonContainer>
                <S.TitleTextButton>Đăng ký</S.TitleTextButton>
                <S.RequirementText>(Tối thiểu 20 uy tín)</S.RequirementText>
              </S.RegisterButtonContainer>
            </S.RegisterButton>
        }
      </S.FeedContainer>
    );
}

export default Feed;
