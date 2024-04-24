import { Avatar, Flex, Divider } from 'antd';
import React from 'react';
import * as S from './styles';

function NotificationDropdown() {
  return (
    <S.NotificationWrapper>
      <S.Heading>
        <h4>Thông báo</h4>
        <Flex gap={8}>
          <S.ButtonNoti $active>Tất cả</S.ButtonNoti>
          <S.ButtonNoti>Chưa xem</S.ButtonNoti>
        </Flex>
      </S.Heading>
      <Divider />
      <S.Body>
        <Flex gap={20}>
        <S.AvatarContainer>
          <Avatar size={60} 
            src={'https://images-ext-1.discordapp.net/external/1cC__FAMCJpeDcSUazZGKkkO2YkJuSNn23fqWZmmN8U/https/res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg?format=webp&width=662&height=662'} />
        </S.AvatarContainer>
            <div>
              <h4>Huy Tran đã gửi đơn đăng ký vào Kèo anh em văn phòng đấm nhau</h4>
              <h5>Hôm nay lúc 06:38</h5>
            </div>
            <S.Ellipse>
             .
            </S.Ellipse>
        </Flex>

        <Flex gap={20}>
        <S.AvatarContainer>
          <Avatar size={60} 
            src={'https://images-ext-1.discordapp.net/external/1cC__FAMCJpeDcSUazZGKkkO2YkJuSNn23fqWZmmN8U/https/res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg?format=webp&width=662&height=662'} />
        </S.AvatarContainer>
          <div>
            <h4>Huy Tran đã gửi đơn đăng ký vào Kèo anh em văn phòng đấm nhau</h4>
            <h5>Hôm nay lúc 06:38</h5>
          </div>
        </Flex>

        <Flex gap={20}>
        <S.AvatarContainer>
          <Avatar size={60} 
            src={'https://images-ext-1.discordapp.net/external/1cC__FAMCJpeDcSUazZGKkkO2YkJuSNn23fqWZmmN8U/https/res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg?format=webp&width=662&height=662'} />
        </S.AvatarContainer>
          <div>
            <h4>Huy Tran đã gửi đơn đăng ký vào Kèo anh em văn phòng đấm nhau</h4>
            <h5>Hôm nay lúc 06:38</h5>
          </div>
        </Flex>

        <Flex gap={20}>
        <S.AvatarContainer>
          <Avatar size={60} 
            src={'https://images-ext-1.discordapp.net/external/1cC__FAMCJpeDcSUazZGKkkO2YkJuSNn23fqWZmmN8U/https/res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg?format=webp&width=662&height=662'} />
        </S.AvatarContainer>
          <div>
            <h4>Huy Tran đã gửi đơn đăng ký vào Kèo anh em văn phòng đấm nhau</h4>
            <h5>Hôm nay lúc 06:38</h5>
          </div>
        </Flex>

        <Flex gap={20}>
        <S.AvatarContainer>
          <Avatar size={60} 
            src={'https://images-ext-1.discordapp.net/external/1cC__FAMCJpeDcSUazZGKkkO2YkJuSNn23fqWZmmN8U/https/res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg?format=webp&width=662&height=662'} />
        </S.AvatarContainer>
          <div>
            <h4>Huy Tran đã gửi đơn đăng ký vào Kèo anh em văn phòng đấm nhau</h4>
            <h5>Hôm nay lúc 06:38</h5>
          </div>
        </Flex>

        <Flex gap={20}>
        <S.AvatarContainer>
          <Avatar size={60} 
            src={'https://images-ext-1.discordapp.net/external/1cC__FAMCJpeDcSUazZGKkkO2YkJuSNn23fqWZmmN8U/https/res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg?format=webp&width=662&height=662'} />
        </S.AvatarContainer>
          <div>
            <h4>Huy Tran đã gửi đơn đăng ký vào Kèo anh em văn phòng đấm nhau</h4>
            <h5>Hôm nay lúc 06:38</h5>
          </div>
        </Flex>
      </S.Body>
    </S.NotificationWrapper>
  );
}

export default NotificationDropdown;
