import styled from "styled-components";
import { LinkNav } from "@/components/layouts/navBar/navBar.style";
export const Icon = styled.svg<{ $isFocus?: boolean }>`
  fill: ${(props) =>
    props.$isFocus ? "#fff" : props.theme.colors.secondaryLightText};
  width: 15px;
  height: 15px;
  &:hover {
    fill: "#fff";
  }
`;
