import { Flex, Form } from 'antd';
import styled from 'styled-components';

export const FormEditWrapper = styled(Flex)`
  width: 100%;
  max-width: 600px;

  padding: 20px 0;

  background-color: ${({ theme }) => theme.colors.backgroundWhite};

  border-radius: 10px;

  .ant-form {
    width: 100%;
  }
`;
export const Tittle = styled.label`
  display: flex;
  justify-content: center;

  height: 46px;
  width: calc(100% - 40px);

  border-bottom: 1px solid #0000000f;

  margin-inline: 20px;

  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
