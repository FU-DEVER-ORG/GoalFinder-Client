import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  width: 400px;
`;

export const RowRememberForgot = styled(Flex)`
  justify-content: space-between;
  align-item: center;

  &:hover {
    color: green;
  }
`;

export const LinkTag = styled.a`
  text-decoration: none;
`;
