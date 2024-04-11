import styled from "styled-components";
import { LinkHref } from "./navBar";
export const ContainerAside = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 250px;
  gap: 20px;
  padding-top: 20px;
`;
export const ContainerAvatar = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  gap: 10px;
  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  .icon {
    width: 15px;
    height: 15px;
    background-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;
   img{
    width: 100%;
    height: 100%;
   }
  }
`;
export const Section = styled.span`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${(props) =>
    props.theme.colors.primaryConponentsLightBackground};
  border-radius: ${({ theme }) => theme.radius.mediumRadius};
  gap: 10px;
  .content {
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
      props.theme.colors.secondaryConponentsLightBackground};
    border-radius: ${({ theme }) => theme.radius.normalRadius};
    padding: 15px;
    gap: 20px;
  }
  .rowUl {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .quantity {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
  .title {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.secondaryLightText};
  }
  .colUl {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
  }
`;
export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  padding-top: 20px;
  background-color: ${(props) =>
    props.theme.colors.primaryConponentsLightBackground};
  border-radius: ${({ theme }) => theme.radius.mediumRadius};
`;
export const LinkNav = styled(LinkHref)<{ $isFocus?: boolean }>`
  border-radius: ${({ theme }) => theme.radius.normalRadius};
  display: flex;
  color: ${(props) =>
    props.$isFocus ? "#fff !important" : props.theme.colors.tertiaryLightText};
  background-color: ${(props) =>
    props.$isFocus
      ? props.theme.colors.tertiaryLightBackground
      : "transparent"};
  text-decoration-line: none;
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding-inline: 20px;
  box-sizing: border-box;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 40px;
  user-select: none;
  
  svg {
    fill: ${({ $isFocus }) => $isFocus && "#fff !important"};
  }
  &:hover {
    color: ${(props) => !props.$isFocus && props.theme.colors.primaryLightText};
    background-color: ${(props) =>
      !props.$isFocus && props.theme.colors.secondaryConponentsLightBackground};
    svg {
      fill: #000;
    }
  }
`;
