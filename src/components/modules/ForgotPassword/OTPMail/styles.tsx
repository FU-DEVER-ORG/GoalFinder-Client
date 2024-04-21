import { Flex } from 'antd';
import styled from 'styled-components';

export const AddMailWrapper = styled(Flex)`
  gap: 24px;
  padding: 24px 20px;

  justify-content: center;
  flex-direction: column;
  align-items: center;
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
