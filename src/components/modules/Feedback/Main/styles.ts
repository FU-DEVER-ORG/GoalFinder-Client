import { Flex } from 'antd';
import styled from 'styled-components';

export const RatingHeader = styled.p`
  margin: 0px 0 24px 0;

  font-size: 24px;

  text-align: center;

  @media ${({theme}) => theme.breakpoints.mdMax}{
    margin-bottom: 12px;
  }
`;
export const CustomHR = styled.hr`
  height: 1px;

  background-color: rgba(0, 0, 0, 0.2);

  border: none;
  margin-bottom: 24px;

  @media ${({theme}) => theme.breakpoints.mdMax}{
    margin-bottom: 12px;
  }
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
    padding: 15px;
  }

  @media ${({theme}) => theme.breakpoints.xsMax} {
    padding: 12px;
  }
 
`;
export const FeedbackWrapper = styled(Flex)`
  flex-direction: column;

  margin-top: 40px;

  backgroundcolor: #f9f9fa;

  @media ${({theme}) => theme.breakpoints.smMax} {
    margin-top: 0px;
  }
`;
