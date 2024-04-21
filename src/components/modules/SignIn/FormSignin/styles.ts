
import { Flex } from 'antd';
import styled from 'styled-components';
import { ButtonCommon } from '@/components/core/common/Button/button.styles';

export const HomeWrapper = styled(Flex)`
  padding: 24px 0px;
  width: 30%;
`;

export const ButtonLogin = styled(ButtonCommon)`
    padding: 30px 20px;
    width: 100%;
    
    background-color: green;
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