import { Flex } from 'antd';
import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  max-width: 380px;

  padding: 12px 20px;

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
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 16px;
    font-weight: 800;
  }

  h5 {
    font-size: 14px;
    font-weight: 300;
  }
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

  .iconUser{
    color: red;
  }
`;

export const Content = styled.div`
  align-items: center;
`