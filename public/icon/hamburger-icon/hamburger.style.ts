import styled from "styled-components";

export const Container = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;

  width: 40px;
  height: 40px;
  padding: 8px 8px;
  border-radius: ${({ theme }) => theme.radius.normalRadius};

  cursor: pointer;
  overflow: hidden;

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
    justify-content: start;

    width: 100%;
    background-color: transparent;
  }
  .second {
    display: flex;
    justify-content: end;

    width: 100%;
    background-color: transparent;
  }
  transition: all 0.8s ease-in;
  @media ${({ theme }) => theme.breakpoints.xlMax} {
    display: flex;
  }
`;
