import { Card, Avatar, Flex } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import styled from 'styled-components';

export const ImgArea = styled(Flex)`
  margin-top: 10px;
  width: 100%;
  height: 617px;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CoverImg = styled(Dragger)`
  position: absolute;
  top: 10px;
  width: 74%;
  height: 380px;
  background-color: #d9d9d9;
  border-radius: 12px;
`;
export const BannerUser = styled(Flex)`
  width: 100%
  box-sizing: border-box;
  position: absolute;
  left: 50px;
  bottom: -160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
export const UserAvatar = styled(Avatar)`
  border: 5px solid white;
  background-color: #d9d9d9;
`;
export const BoxUser = styled(Flex)`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 38.73px;
`;

export const Prestige = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;
`;

export const Container = styled(Flex)`
  width: 100%;
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Moreinfor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  box-sizing: border-box;
`;

export const Left = styled(Flex)`
  width: 420px;
  height: 330px;
`;

export const Introduction = styled(Card)`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

export const IntroTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
  text-align: left;
  margin-bottom: 20px;
`;

export const IntroQuotes = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: center;
`;
export const Aboutme = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  letter-spacing: 0.08em;
  text-align: left;
  padding: 8px 0;
`;

export const Right = styled(Flex)`
  // height: auto;
`;

export const MatchHistory = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Activites = styled(Card)`
  width: 750px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const UserAction = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: 0.08em;
`;
export const MatchProperties = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PropertiesList = styled.ul`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  padding-bottom: 16px;
`;
export const ItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Item = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
`;
