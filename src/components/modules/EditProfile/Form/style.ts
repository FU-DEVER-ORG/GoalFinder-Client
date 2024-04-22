import { Flex, Form } from 'antd';
import styled from 'styled-components';

export const FormEditWrapper = styled(Flex)`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 10px;
  min-width: 600px;
`;
export const Tittle = styled.label`
  display: flex;
  justify-content: center;

  margin-inline: 20px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  height: 46px;
  width: calc(100% - 40px);
  border-bottom: 1px solid #0000000f;
`;
