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
    font-weight: 600;
  }

`;

export const ButtonNoti = styled.button<{ $active?: boolean }>`
  padding: 4px 16px;

  font-size: 16px;
  font-weight: 600;

  border: none;
  border-radius: 20px;

  background-color: ${({ $active }) => ($active ? '#A7FFB1' : '#fff')};

  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    position: absolute;
    right: 0px;
    width: 10px;
    height: 10px;
    color: #0031E0;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
  }

  h5 {
    padding-bottom: 12px;
    font-size: 12px;
    font-weight: 400;
    color: #0031E0;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  }
`;

export const Content = styled.div`
  align-items: center;
`
 export const Ellipse = styled.div<{ $active?: boolean }>`
  height: 30px;
  font-size: 100px;

  display: flex;
  align-items: center;
 
  color: ${({ $active }) => ($active ? '#fff' : '#0031E0')};

  span {
  margin-bottom: 100px;
  }
  
  
  `;