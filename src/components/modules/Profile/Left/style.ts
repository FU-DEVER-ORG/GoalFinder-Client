import { Card, Flex } from 'antd';

import styled from 'styled-components';

import devices from '@/style/themes/default/breakpoints';

export const Left = styled(Flex)`
  width: 380px;
  height: 300px;
  @media (${devices.xlMax}) {
    width: 350px;
    height: 280px;
  }

  @media (${devices.mdMax}) {
    height: auto;
    margin-top: 0;
  }

  @media (${devices.smMax}) {
    width: 80%;
    height: auto;
    margin-top: 0;
  }
`;
export const Wrapper = styled(Card)`
  width: 100%;
  height: auto;

  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const IntroTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
  text-align: left;
  @media (${devices.xlMax}) {
    font-size: 20px;
  }
`;

export const IntroQuotes = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: center;
  @media (${devices.xlMax}) {
    margin-top: 10px;
    font-size: 14px;
    line-height: 16.36px;
  }
  @media (${devices.mdMax}) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(221, 221, 221);
  margin: 18px 0;
  @media (${devices.lgMax}) {
    margin: 10px 0;
  }
  @media (${devices.mdMax}) {
    margin: 5px 0;
  }
`;

export const Story = styled.div`
  @media (${devices.lgMax}) {
    padding: 4px 0;
  }
  @media (${devices.lgMax}) {
    padding: 0px;
  }
`;
export const Aboutme = styled(Flex)`
  gap: 10px;
  padding-bottom: 8px;
  @media (${devices.xlMax}) {
    padding-bottom: 2px;
  }
  @media (${devices.mdMax}) {
    padding: 4px 0;
  }
  @media (${devices.smMax}) {
    padding: 4px 0;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;
export const Information = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  letter-spacing: 0.08em;
  text-align: left;

  @media (${devices.xlMax}) {
    font-size: 14px;
    padding-bottom: 6px;
  }
  @media (${devices.lgMax}) {
    font-size: 13px;
    padding-bottom: 6px;
  }
  @media (${devices.mdMax}) {
    padding-bottom: 4px;
  }
  @media (${devices.smMax}) {
    padding: 4px 0;
  }
`;
