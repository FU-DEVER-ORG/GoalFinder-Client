
import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  padding: 24px 0px;
  width: 30%;
`;

export const RowRememberForgot = styled(Flex)`
  justify-content: space-between;
  align-item: center;

  &:hover{
    color: green;
  }
`

export const LinkTag = styled.a`
  text-decoration: none;
`