import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  padding: 50px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap:10px;
`;

export const TitleLogin = styled(Title)`
    
`

export const ButtonLogo = styled.button`
    position: relative;
    padding: 20px;
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgLogo = styled.img`
    width: 50px;
    height: 50px;
`;

