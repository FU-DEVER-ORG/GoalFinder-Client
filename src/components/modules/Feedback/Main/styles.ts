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
  height: 1px;

  background-color: rgba(0, 0, 0, 0.2);

  border: none;
  margin-bottom: 24px;
`;
export const ContentWrapper = styled(Flex)`
  width: 60%;

  flex-direction: column;

  margin: 0 auto;
  padding: 20px;

  background-color: #ffffff;

  @media ${({theme}) => theme.breakpoints.xlMax} {
    width: 80%;
  }

  @media ${({theme}) => theme.breakpoints.mdMax} {
    width: 90%;
  }

  @media ${({theme}) => theme.breakpoints.smMax} {
    width: 100%;
  }
`;
export const FeedbackWrapper = styled(Flex)`
  flex-direction: column;

  backgroundcolor: #f9f9fa;
`;
