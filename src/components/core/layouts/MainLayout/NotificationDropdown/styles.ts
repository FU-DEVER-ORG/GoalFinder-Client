import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  max-width: 380px;

  padding: 20px;

  background-color: #fff;

  border-radius: 8px;

  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  position: absolute;
  right: 20px;
  top: 72px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h4 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const ButtonNoti = styled.button<{ $active?: boolean }>`
  padding: 4px 16px;

  font-size: 16px;
  font-weight: 500;

  border: none;
  border-radius: 20px;

  background-color: ${({ $active }) => ($active ? '#A7FFB1' : '#fff')};

  cursor: pointer;
`;
