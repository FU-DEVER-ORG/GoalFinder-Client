import { Avatar, Flex } from 'antd';

import BoxFlex from '@/components/core/common/BoxFlex';

import * as S from './styles';

function UserInfo() {
  return (
    <BoxFlex vertical gap={16}>
      <S.Head gap={12} align="center">
        <Avatar src="/images/layout/avatar.jpeg" size={40} />
        <Flex vertical>
          <S.Name>Bao Thang</S.Name>
          <S.Username>@sawsew467</S.Username>
        </Flex>
      </S.Head>
      <Flex justify="space-between">
        <S.InfoItem vertical align="center" gap={4}>
          <p>Điểm uy tín</p>
          <span>100</span>
        </S.InfoItem>
        <S.InfoItem vertical align="center" gap={4}>
          <p>Khu vực</p>
          <span>Đà Nẵng</span>
        </S.InfoItem>
      </Flex>
    </BoxFlex>
  );
}

export default UserInfo;
