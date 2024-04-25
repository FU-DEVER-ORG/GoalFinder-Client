import React from 'react';

import { Avatar, Flex, Divider } from 'antd';
import {
  LogoutOutlined,
  EditOutlined,
  UserOutlined,
} from '@ant-design/icons';

import * as S from './styles';

function AvatarDropdown() {
  return (
    <S.NotificationWrapper>
      <S.Heading>
        <h4>Tran Van Bao Thang</h4>
        <h5>@sawsew467</h5>
      </S.Heading>
      <Divider />

      <S.Body>
        <Flex gap={12}>
        <UserOutlined size={16} style={{color:'#8C8C8C'}} />
          <S.Content style={{ display: 'flex'}}>
            <div>
              <h4>Trang cá nhân của bạn</h4>
            </div>
          </S.Content>
        </Flex>
        </S.Body>
        <Divider />

        <S.Body>
        <Flex gap={12}>
        <EditOutlined size={16} style={{color:'#8C8C8C'}} />
          <S.Content style={{ display: 'flex'}}>
            <div>
              <h4>Chỉnh sửa thông tin</h4>
            </div>
          </S.Content>
        </Flex>
        </S.Body>
        <Divider />
        
        <S.Body>
        <Flex gap={12}>
        <LogoutOutlined size={16} style={{color:'#8C8C8C'}} />
          <S.Content style={{ display: 'flex'}}>
            <div>
              <h4>Đăng xuất</h4>
            </div>
          </S.Content>
        </Flex>
        </S.Body>
        <Divider />  

    </S.NotificationWrapper>
  );
}

export default AvatarDropdown;
