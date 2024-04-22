import { Flex } from 'antd';
import styled from 'styled-components';

export const Header = styled(Flex)`
  margin-top: 10px;
  width: 100%;
  height: 617px;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 517px; /* hoặc bất kỳ giá trị nào khác phù hợp với thiết kế của bạn */
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  width: 74%;
  height: 380px;
  background-color: #d9d9d9;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 576px) {
    width: 88%;
    height: auto;
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
  width: 100%
  box-sizing: border-box;
  position: absolute;
  left: 50px;
  bottom: -150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  cursor: pointer;
  @media (max-width: 1023px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    left: 30px;
    bottom: -120px;
    gap: 20px;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    left: 0;
    bottom: -140px;
    gap: 10px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 576px) {
    width: 120px;
    height: 120px;
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid white;
  background-color: #d9d9d9;
  position: absolute;
`;
export const Camera = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(208 208 208);
  bottom: 14px;
  right: 16px;
  padding: 2px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    bottom: 10px;
    right: 12px;
    padding: 1px;
  }
`;
export const BoxUser = styled(Flex)`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 38.73px;
  @media (max-width: 1023px) {
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Prestige = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;
