import { createContext } from 'react';
import styled from 'styled-components';

const ReachableContext = createContext(null);

export const ReachableContextConsumer = styled(ReachableContext.Consumer)`
  .ant-btn {
    background-color: #4DAA57 !important;
  }
`;
