import { Flex } from 'antd';
import styled from 'styled-components';

export const RatingHeader = styled.p`
  margin: 0px 0 24px 0;
  font-size: 24px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 16px;
    margin: 70px 0 12px 0;
  }
`;
export const CustomHR = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 24px;
`;
export const ContentWrapper = styled(Flex)`
  margin: 0 auto;
  width: 60%;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const FeedbackWrapper = styled(Flex)`
  backgroundcolor: #f9f9fa;
  flex-direction: column;
`;
