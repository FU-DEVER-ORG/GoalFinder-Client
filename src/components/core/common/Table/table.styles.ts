import styled from "styled-components";
import { Table as TableAntd, Pagination } from "antd";

export const WrapTable = styled.div`
  /*  */
`;

export const WrapHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h4`
  /*  */
`;

export const Table = styled(TableAntd)`
  margin-bottom: 24px;

  .ant-table-container {
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px !important;
    }
  }

  .ant-table {
    background: transparent !important;

    border-radius: 8px !important;

    .ant-table-thead {
      background-color: ${(props) => props?.theme?.colors?.primary};
      border-collapse: unset;

      .ant-table-cell {
        font-size: ${(props) => props.theme.fontSize.base};
        font-weight: ${(props) => props.theme.fontWeight.medium};
        color: ${(props) => props?.theme?.colors?.newtralLightest};

        border-bottom: none;
        white-space: nowrap;
        border: none;
        background: none !important;

        text-align: center;
        padding: 16px 10px !important;

        &::before {
          background-color: ${(props) =>
            props?.theme?.colors?.primary} !important;
        }

        &:first-child {
          border-start-start-radius: 0 !important;
        }

        &:last-child {
          border-start-end-radius: 0 !important;
        }

        @media ${(props) => props.theme.breakpoints.smMax} {
          font-size: ${(props) => props.theme.fontSize.md};
        }
      }
    }

    .ant-table-tbody {
      .ant-table-placeholder {
        > .ant-table-cell {
          /* border: 1px solid #f1f1f1; */
          background-color: ${({ theme }) => theme?.colors?.primaryLighter};
        }
      }

      .ant-table-row {
        &:has(.ant-checkbox-wrapper-disabled) {
        }

        .ant-table-cell {
          //text-transform: capitalize;
          vertical-align: middle;
          border-bottom: 1px solid #e8e8e8;
          padding: 16px 10px;

          background: transparent !important;

          p {
            font-weight: ${(props) => props.theme.fontWeight.regular};
          }

          a {
            /* font-size: ${(props) => props.theme.fontSize.md};
            font-weight: ${(props) => props.theme.fontWeight.regular};
            color: ${(props) => props?.theme?.colors?.other?.text1}; */

            &:hover {
              color: ${(props) => props?.theme?.colors?.primary};
            }
          }

          &:first-child {
            border-left: 1px solid #e8e8e8;
          }

          &:last-child {
            border-right: 1px solid #e8e8e8;
          }
        }
      }
    }

    .ant-table-expanded-row-fixed {
      border: 1px solid #f1f1f1;
      border-bottom-left-radius: ${(props) => props.theme.radius.mediumRadius};
      border-bottom-right-radius: ${(props) => props.theme.radius.mediumRadius};
    }

    .ant-table-column-sorter-inner {
      .active {
        color: ${(props) => props.theme.colors.primaryColor};
      }
    }
  }
`;

export const EmptyData = styled.div`
  width: 100%;

  p {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }
`;

export const WrapActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  .icon-action {
    padding: 4px 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapActionsHeader = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const WrapFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
`;

export const FilterItem = styled.div``;

export const WrapPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapSelectPageSize = styled.div`
  display: flex;
  align-items: center;

  .ant-select {
    .ant-select-selector {
      background: transparent !important;

      .ant-select-selection-item {
        font-weight: ${(props) => props.theme.fontWeight.medium};
      }
    }
  }

  p {
    margin-right: 10px;
    font-size: 16px;
    color: gray;
  }
`;

export const PaginationAnt = styled(Pagination)`
  display: flex;
  justify-content: end;

  .ant-select {
    display: none !important;
  }

  .ant-pagination-item {
    a {
      color: #a0aec0 !important;
      font-weight: ${(props) => props.theme.fontWeight.medium};
    }
  }

  .ant-pagination-item-active {
    background-color: ${({ theme }) => theme?.colors?.primary} !important;
    border: 1px solid ${({ theme }) => theme?.colors?.primary} !important;

    a {
      color: ${({ theme }) => theme?.colors?.text5} !important;
      font-weight: ${(props) => props.theme.fontWeight.bold} !important;
    }
  }
`;
