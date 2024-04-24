import Button from "@/components/core/common/Button";
import { Avatar, Flex } from "antd";
import styled from "styled-components";

export const PlayerWrapper = styled.ul`
  display: flex; 
  align-items: center; 
  padding: 0px; 
  flex-direction: column;
  border-radius: 10px;

`;

export const PlayerItem = styled.li`
  list-style: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: auto 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
  
`
export const CustomButton = styled(Button) <{ selected: boolean }>`
  width: 100%;
  type: 'default';
  color: black !important;
  background: ${({ selected }) => (selected ? '#FFC6C6' : '#C6FFCC')} !important; 
  max-height: 80px !important;
  height: 80px !important;
  margin: 6px 20px;
  padding: 0 !important;
  &.ant-btn-default:hover{
    color: black !important;
  }

  @media (max-width: 768px) {
    max-height: 60px !important;
    height: 60px !important;
    margin: 3px 10px;
  }
  @media (max-width: 480px) {
    max-height: 40px !important;
    height: 40px !important;
    margin: 3px 10px;
  }
`;

export const PlayerFlex = styled(Flex)`
  
  
  width: 100%;
  align-item: center ;
`
export const CustomAvatar = styled(Avatar)`
    
    width: 40px !important;
    height: 40px !important;
    margin-right: 20px !important;;
    @media (max-width: 480px) {
      width: 20px !important;
      height: 20px !important;
      margin-right: 10px !important;;
    }
`
export const PlayerAvatarName = styled.li`
    list-style: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  
    @media (max-width: 480px) {
      font-size: 10px;
      margin: auto 0px;
    }
`
export const ConfirmButton = styled(Button)`
    width: 100%;
    margin-top: 18px;
`
export const RatingTitle = styled.p`
  font-size: 16px;
  text-align: left;
  font-weight: 500;
  text-decoration: underline;

  // @media (max-width: 480px) {
  //   font-size: 10px;
  // }
`