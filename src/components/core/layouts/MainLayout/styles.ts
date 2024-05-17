import { Flex } from 'antd';
import styled from 'styled-components';

export const LayoutWrapper = styled.main`
  background-color: ${(props) => props?.theme?.colors?.backgroundGray};

  
`;

export const Header = styled.header`
  background-color: ${(props) => props?.theme?.colors?.backgroundWhite};

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const Container = styled.div`
  max-width: 1440px;

  padding: 16px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 190px;
  height: 40px;
`;

export const InputWrap = styled.div`
  width: 400px;
`;

export const Circle = styled(Flex)`
  background-color: #f8f8f9;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  position: relative;

  cursor: pointer;
`;

export const Badge = styled(Flex)`
  width: 24px;
  height: 20px;

  border: 1px solid #fff;

  border-radius: 20px;

  background-color: #ff6a6a;

  color: #fff;
  font-size: 12px;

  position: absolute;
  bottom: 24px;
  left: 28px;
`;

export const Avatar = styled.div`
  position: relative;

  & img {
    border-radius: 50%;

    display: block;

    cursor: pointer;
  }
`;

export const Down = styled(Flex)`
  background-color: #f8f8f9;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  border: 1px solid #fff;

  position: absolute;
  right: 0;
  bottom: 0;

  cursor: pointer;

  span {
    font-size: 8px;
  }
`;

export const Body = styled.div`
  padding-top: 80px;
  // Add your styles here
`;
