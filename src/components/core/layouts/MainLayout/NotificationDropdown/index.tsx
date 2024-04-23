import { Flex } from 'antd';

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
    </S.NotificationWrapper>
  );
}

export default NotificationDropdown;
