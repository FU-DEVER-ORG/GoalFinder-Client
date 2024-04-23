import { Flex, Image } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  padding: 50px 0px;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap:10px;
`;


export const ButtonLogo = styled.button`
    position: relative;

    padding: 10px;

    width: 70px;
    height: 70px;

    background-color: white;
    border-radius: 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgLogo = styled(Image)`
  width: 100;
  height: 100;
`;

