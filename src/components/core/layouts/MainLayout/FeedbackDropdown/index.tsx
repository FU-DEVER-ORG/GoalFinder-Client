import React from 'react';

import { Avatar, Flex, Divider } from 'antd';

import * as S from './styles';

function Feature () {
  return (
    <S.Body>
        <Flex gap={20}>
        <S.AvatarContainer>
          <Avatar size={60} 
            src={'https://images-ext-1.discordapp.net/external/1cC__FAMCJpeDcSUazZGKkkO2YkJuSNn23fqWZmmN8U/https/res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg?format=webp&width=662&height=662'} />
        </S.AvatarContainer>
          <S.Content style={{ display: 'flex'}}>
            <div>
              <h4>Đánh giá Kèo anh em văn phòng đấm nhau</h4>
              <h5>Kết thúc sau 20 giờ nữa</h5>
            </div>
            <S.Ellipse>
              <span>.</span>
            </S.Ellipse>

          </S.Content>
        </Flex>
        </S.Body>
  )
}

function NotificationDropdown() {
  return (
    <S.NotificationWrapper>
      <S.Heading>
        <h4>Đánh giá trận đấu</h4>
        <Flex gap={8}>
          <S.ButtonNoti $active>Tất cả</S.ButtonNoti>
          <S.ButtonNoti>Chưa làm</S.ButtonNoti>
        </Flex>
      </S.Heading>
      <Divider />
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </S.NotificationWrapper>
  );
}

export default NotificationDropdown;
