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
  .btn {
    padding: 0 20px;
  }

  span{
    line-height: 1.6 !important;
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    span {
      font-size: ${({ theme }) => theme.fontSize.sm} !important;
    }
  }

  @media ${({ theme }) => theme.breakpoints.smMax} {
    span {
      font-size: ${({ theme }) => theme.fontSize.xs} !important;
    }
  }
`;

export const FormItem = styled(Form.Item)<{ $full?: boolean }>`
  padding: 0 20px !important;

  @media ${({ theme }) => theme.breakpoints.smMax} {
    * {
      font-size: ${({ theme }) => theme.fontSize.xs} !important;
    }
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
