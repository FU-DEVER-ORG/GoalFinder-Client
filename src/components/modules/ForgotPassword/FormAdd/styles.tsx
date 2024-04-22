import { Flex } from 'antd';
import styled from 'styled-components';

export const Input = styled.div`
  position: relative;
  width: 100%;

  .submit-button:hover {
    background-color: #2f473e !important;
  }

  .ant-btn-default {
    border: 1px solid #f5f7fa !important;
  }

  .resend {
    color: rgba(16, 0, 201, 1) !important;
    font-weight: 600;
  }
`;

export const InputNumber = styled(Flex)`
  width: 100%;
  gap: 15px;

  flex-direction: row;
  justify-content: center;

  .inputBlock {
    background-color: rgba(234, 250, 241, 1) !important;
    border: 1px solid rgba(71, 108, 94, 1) !important;
  }
`;

export const InputMenu = styled(Flex)`
  width: 100%;
  gap: 10px;

  flex-direction: row;
  justify-content: space-between;
`;

export const CountdownContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 12px;
  padding-bottom: 40px;
`;

export const ModalContent = styled(Flex)`
  gap: 40px;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
