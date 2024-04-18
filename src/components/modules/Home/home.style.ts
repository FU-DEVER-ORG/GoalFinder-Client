import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 3000px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  
  gap: 20px;
  margin-top: 20px;
  .content {
    display: flex;
    flex-direction: column;

    padding-block: 20px;
    border-radius: 16px;
    background-color: #fff;
    gap: 10px;
    .user {
      padding-inline: 15px;
      display: flex;
      gap: 20px;
      height: auto;
      align-items: start;
    }
    .userName {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding-top: 5px;
      .name {
        font-size: 16px;
        font-weight: 500;
      }
      .time {
        font-size: 12px;
        font-weight: 400;
      }
    }
    .text {
      padding-inline: 15px;
      font-size: 16px;
      font-weight: 500;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
