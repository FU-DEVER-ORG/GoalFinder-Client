import { Flex } from 'antd';
import styled from 'styled-components';

export const AddMailWrapper = styled(Flex)`
  gap: 40px;
  width: 48%;

  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ImgLogo = styled(Flex)`
  position: relative;

  & img {
    display: block;
    cursor: pointer;
  }
`;

export const TypographyWrapper = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
