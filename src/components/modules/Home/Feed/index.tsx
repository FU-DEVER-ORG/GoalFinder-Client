'use client';

import { FC } from 'react';
import moment from 'moment';
import { Avatar } from 'antd';

import Button from '@/components/core/common/Button';
import { MenuItem } from '@/model/entites/Feed';
import { useGetMatchQuery } from '@/store/services/auth';

import * as S from './styles';

interface FeedProps {
  data: MenuItem;
}

const Feed: FC<FeedProps> = ({ data }) => {
  const { post } = useGetMatchQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post : any) => post.id === data),
    }),
  })
  return (
    <S.FeedContainer>
        <S.UserInfor>
          <Avatar src="/images/layout/avatar.jpeg" size={40} />
          <S.CustomFlex vertical>
            <S.Name>{post?.hostName}</S.Name>
            <S.FlexPrestige>
              <S.CustomCrownFilled />
              <S.PrestigeScore>100 Uy tín</S.PrestigeScore>
            </S.FlexPrestige>
          </S.CustomFlex>
          <S.CustomEllipsisOutlined />
        </S.UserInfor>
      <S.FlexMatchInfor>
        <S.TitleMatchInfor>Kèo ae văn phòng đấm nhau</S.TitleMatchInfor>
        <S.ListMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Thời gian:</S.BoldText>
              <S.NoneBoldText>
                {moment(post?.startTime).format('LT')} |{' '}
                {moment(post?.startTime).format('L')}
              </S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Địa điểm:</S.BoldText>
              <S.NoneBoldText>{post?.pitchAddress}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Cạnh tranh:</S.BoldText>
              <S.NoneBoldText>{post?.competitionLevel}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Khu vực:</S.BoldText>
              <S.NoneBoldText>{post?.address}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Số lượng:</S.BoldText>
              <S.NoneBoldText>{post?.maxMatchPlayersNeed} người</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Tiền sân:</S.BoldText>
              <S.NoneBoldText>{post?.pitchPrice ? post?.pitchPrice.toLocaleString('vi-VN') + ' ' + "VNĐ" : 'N/A'}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
        </S.ListMatchInfor>
      </S.FlexMatchInfor>
      <S.ContainerDescription>
        <S.TitleDescription>Mô tả thêm:</S.TitleDescription>
        <S.Description>{post?.description}</S.Description>
      </S.ContainerDescription>
      {
        post?.isRegister ?
          (
            post?.isAccepted ?
              <Button $width={'100%'} type="primary" disabled>Đã vào kèo</Button>
              :
              <Button $width={'100%'}>Huỷ đăng ký</Button>
          )
          :
          <S.RegisterButton $width={'100%'} type='primary'>
            <S.RegisterButtonContainer>
              <S.TitleTextButton>Đăng ký</S.TitleTextButton>
              <S.RequirementText>(Tối thiểu {post?.minPrestigeScore} uy tín)</S.RequirementText>
            </S.RegisterButtonContainer>
          </S.RegisterButton>
      }
    </S.FeedContainer>
  );
}

export default Feed;
