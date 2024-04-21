import styled from 'styled-components';

export const LayoutWrapper = styled.main`
  background-color: ${(props) => props?.theme?.colors?.backgroundGray};
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: ${(props) => props?.theme?.colors?.backgroundWhite};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
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

export const Body = styled.div`
  padding-top: 80px;
`;
