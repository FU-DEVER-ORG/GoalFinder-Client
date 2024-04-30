import { Flex } from 'antd';
import styled from 'styled-components';

export const AddMailWrapper = styled(Flex)`
  gap: 40px;
  width: 48%;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ImgLogo = styled.div`
  position: relative;

  & img {
    display: block;
    cursor: pointer;
  }
`;

export const TypographyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
