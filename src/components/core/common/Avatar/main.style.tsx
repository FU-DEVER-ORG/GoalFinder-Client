import styled from "styled-components";

import { Avatar } from "antd";


export const AvatarComponents = styled(Avatar)`
  width: 50px;
  height: 50px;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  img {
    border-radius: 50%;
  }
`;
