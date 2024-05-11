import { Flex } from 'antd';

import styled from 'styled-components';

import devices from '@/style/themes/default/breakpoints';

export const Header = styled(Flex)`
  margin-top: -64px;
  width: 100%;
  height: 560px;
  @media (${devices.mdMax}) {
    height: 540px;
  }
  @media (${devices.smMax}) {
    height: 550px;
  }
  @media (${devices.xsMax}) {
    height: 550px;
  }
`;
export const HeaderMain = styled(Flex)`
  width: 100%;

  background-color: white;

  position: relative;

  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  max-width: 1440px;
  position: absolute;
  top: 10px;

  width: 74%;
  height: 380px;

  background-color: #d9d9d9;

  border-radius: 12px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (${devices.mdMax}) {
  }
  @media (${devices.smMax}) {
    width: 88%;
  }
`;
export const CoverImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 12px;

  object-fit: cover;
  cursor: pointer;
`;
export const BannerUser = styled(Flex)`
  position: absolute;
  left: 50px;
  bottom: -150px;

  gap: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  cursor: pointer;
  @media (${devices.xlMax}) {
    gap: 20px;
  }
  @media (${devices.mdMax}) {
    left: 30px;
    bottom: -120px;

    gap: 20px;

    flex-direction: row;
  }
  @media (${devices.smMax}) {
    left: 0;
    bottom: -140px;
    gap: 10px;

    width: 100%;
    height: auto;

    flex-direction: column;
    justify-content: center;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  @media (${devices.mdMax}) {
    width: 150px;
    height: 150px;
  }
  @media (${devices.smMax}) {
    width: 120px;
    height: 120px;
  }
`;

export const UserAvatar = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  border: 5px solid white;

  background-color: #d9d9d9;
`;

export const BoxUser = styled(Flex)`
  margin-top: 70px;
  flex-direction: column;

  @media (${devices.mdMax}) {
    margin-top: 40px;
  }

  @media (${devices.smMax}) {
    margin-top: 0px;
  }
`;
export const Name = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 38.73px;

  @media (${devices.xlMax}) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (${devices.mdMax}) {
    font-size: 22px;
    line-height: 28px;
  }
`;
export const Icon = styled.div`
  position: relative;

  width: 24px;
  height: 24px;
`;
export const Prestige = styled.span`
  display: flex;
  flex-direciton: row;
  align-items: center;
  gap: 4px;
`;
export const PrestigeScore = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;

  @media (${devices.xlMax}) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (${devices.mdMax}) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (${devices.smMax}) {
    text-align: center;
  }
`;
