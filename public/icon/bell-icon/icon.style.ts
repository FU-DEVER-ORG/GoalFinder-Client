import { styled } from "styled-components";
import { Icon as ParentIcon } from "@/components/layouts/clientLayout/ClientLayouts.style";
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.secondaryLightText};
  ${ParentIcon}:hover & {
    fill: #fff;
  }
`;
