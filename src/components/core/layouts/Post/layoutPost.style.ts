import styled from "styled-components";

export const Section = styled.span`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #fff;
  border-radius: 16px;
  gap: 10px;
  .content {
    display: flex;
    gap: 20px;
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: #f8f8f8;
  }
  .input {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding-left: 20px;
    background-color: #f8f8f8;
    border-radius: 16px;
    width: 70%;
  }
  .text {
    color: #8c9095;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 8px;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    color: #909090;
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
      color: ${({ theme }) => theme.colors.primaryLightText};
    }
  }
`;
