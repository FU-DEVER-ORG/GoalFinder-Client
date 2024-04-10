import styled from "styled-components";
import { LinkHref } from "./ClientComponents";

export const ContainerBody = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primaryLightBackground};
`;

export const Header = styled.header`
  background-color: ${(props) =>
    props.theme.colors.primaryConponentsLightBackground};
  width: 100%;
  height: 80px;
`;
export const ContainerHeader = styled.div`
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  margin-inline: auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-inline: 40px;
`;
export const ContainerLogoSearch = styled.div`
  display: flex;
  justify-content: start;
`;
export const LinkLogo = styled(LinkHref)`
  display: flex;
  align-items: center;
  width: 250px;
  gap: 10px;
  justify-content: start;
  color: ${(props) => props.theme.colors.primaryLightText};
  text-decoration-line: none;
  span {
    height: auto;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
export const Search = styled.span`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.mediumRadius};
  padding: 10px 15px;
  gap: 10px;
  width: 400px;
  background-color: ${(props) =>
    props.theme.colors.secondaryConponentsLightBackground};
  img {
    height: 20px;
    width: 20px;
  }
  input {
    border: 0;
    outline: 0;
    background-color: transparent;
    width: 100%;
    &::placeholder {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secondaryLightText};
    }
  }
`;
export const Setting = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
`;
export const Icon = styled(LinkHref)`
  padding: 10px;
  display: flex;
  border-radius: ${({ theme }) => theme.radius.normalRadius};
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.colors.secondaryConponentsLightBackground};
  aspect-ratio: 1 / 1;
  img {
    width: 20px;
    height: 20px;
  }
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
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  .icon {
    width: 15px;
    height: 15px;
    background-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

// main
export const Container = styled.div`
  gap: 20px;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-inline: auto;
  box-sizing: border-box;
  padding: 20px;
  @media ${({ theme }) => theme.breakpoints.xxlMax} {
    padding-inline: 40px;
  }
  @media ${({ theme }) => theme.breakpoints.xlMax} {
    padding-inline: 20px;
  }
  @media ${({ theme }) => theme.breakpoints.mdMax} {
    padding-inline: 10px;
  }
  @media ${({ theme }) => theme.breakpoints.xsMax} {
    padding-inline: 0;
  }
`;
export const ContainerAside = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 250px;
  gap: 20px;
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
  .title {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({theme}) => theme.fontSize.md};
  }
  .disc {
    font-size:  ${({theme}) => theme.fontSize.base};;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({theme}) => theme.colors.secondaryLightText};
  }
  .colUl {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
  }
`;
export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size:  ${({theme}) => theme.fontSize.xl};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: ${(props) =>
    props.theme.colors.primaryConponentsLightBackground};
  border-radius: ${({theme}) => theme.radius.mediumRadius};
`;
export const LinkNav = styled(LinkHref)`
  border-radius: ${({theme}) => theme.radius.normalRadius};
  display: flex;
  color: ${({theme}) => theme.colors.tertiaryLightText};
  text-decoration-line: none;
  font-size: ${({theme}) => theme.fontSize.lg};
  padding-inline: 20px;
  box-sizing: border-box;
  font-weight: ${({theme}) => theme.fontWeight.semiBold};
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 40px;
  user-select: none;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.secondaryConponentsLightBackground};
  }
`;
export const Cointainermain = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border-radius: ${(props) => props.theme.radius.mediumRadius};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
