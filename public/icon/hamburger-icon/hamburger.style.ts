import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 8px 8px;
  border-radius: ${({ theme }) => theme.radius.normalRadius};
  overflow: hidden;

  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.colors.secondaryConponentsLightBackground};
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiaryLightBackground};
    span {
      background-color: #fff;
      transition: all 0.1s ease-in;
    }
  }
  span {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondaryLightText};
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    transition: all 0.8s ease-out;
  }
  .first {
    display: flex;
    width: 100%;
    background-color: transparent;
    justify-content: start;
  }
  .second {
    display: flex;
    width: 100%;
    background-color: transparent;
    justify-content: end;
  }
  transition: all 0.8s ease-in;
`;
