import { ButtonCommon } from '@/components/core/common/Button/button.styles';
import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  padding: 24px 0px;
  width: 30%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ButtonLogin = styled(ButtonCommon)`
    padding: 30px 20px;
    width: 100%;
    background-color: green;
`;