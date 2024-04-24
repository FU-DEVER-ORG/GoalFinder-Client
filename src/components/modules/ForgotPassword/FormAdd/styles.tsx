import styled from 'styled-components';

export const Input = styled.div`
  position: relative;
  width: 100%;

  .ant-btn-default {
    border: 1px solid #f5f7fa !important;
  }

  .resend {
    color: rgba(16, 0, 201, 1) !important;
    font-weight: 600;
  }

  .resendWrapper {
    gap: 4px;

    display: flex;
    flex-direction: row;
  }
`;

export const InputNumber = styled.div`
  width: 100%;
  gap: 15px;
  padding-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  .inputBlock {
    background-color: rgba(234, 250, 241, 1) !important;
    border: 1px solid rgba(71, 108, 94, 1) !important;
  }

  input {
    width: 50px !important;
    height: 50px !important;

    display: flex !important;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbe0df !important;
    border-radius: 8px;
  }

  input:hover {
    border: 1px solid rgba(71, 108, 94, 1) !important;
  }
`;

export const InputMenu = styled.div`
  width: 100%;
  gap: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CountdownContainer = styled.div`
  gap: 12px;
  padding-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalContent = styled.div`
  gap: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
