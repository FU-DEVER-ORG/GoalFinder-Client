import { Flex } from 'antd';
import styled from 'styled-components';

export const BoxWrapper = styled(Flex)<{ $padding: string }>`
  padding: ${(props) => props.$padding};

  background-color: ${(props) => props?.theme?.colors?.backgroundWhite};

  border-radius: 8px;
`;
