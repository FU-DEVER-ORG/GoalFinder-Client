import styled from "styled-components";

export const Modal = styled.dialog<{ $isOpen?: Boolean }>`
  position: fixed;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height:  100vh;
  display: ${({$isOpen}) => $isOpen ? "flex" : "none"};
  background-color: ${({ theme }) => theme.colors.lightOverplay};
  z-index: 99;
`;
export const BoxModal = styled.div`
  width: clamp(300px, 90%, 500px);
  background-color: ${({ theme }) =>
    theme.colors.primaryConponentsLightBackground};
  border-radius: ${({ theme }) => theme.radius.mediumRadius};
  border: 2px solid ${({ theme }) => theme.colors.primaryLightBackground};
  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  }
  .content {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    padding: 16px;
    gap: 20px;
    border-top: 2px solid ${({ theme }) => theme.colors.primaryLightBackground};
    .user {
      display: flex;
      align-items: start;
      
      gap: 10px;
      .user-name {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
    .container-input {
      height: auto;
      width: 100%;
      line-height: 28px;
      height: 28px;
      .input{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
