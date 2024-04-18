import { css } from 'styled-components';

const checkbox = css`
  .ant-checkbox-wrapper {
    color: ${({ theme }) => theme?.colors?.primary};
    line-height: 1.35;

    display: flex;
    align-items: center;
    gap: 6px;
  }

  .ant-checkbox-wrapper .ant-checkbox {
    width: 20px;
    height: 20px;
  }

  .ant-checkbox-wrapper .ant-checkbox .ant-checkbox-inner {
    border: 2px solid ${({ theme }) => theme?.colors?.primaryDarker};
    width: 20px;
    height: 20px;
    border-radius: 4px;
    font-weight: 500;
    color: ${({ theme }) => theme?.colors?.primary};
  }

  .ant-checkbox-wrapper .ant-checkbox.ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover
    .ant-checkbox.ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ${({ theme }) => theme?.colors?.primary} !important;
    border-color: ${({ theme }) => theme?.colors?.primary};

    &:hover {
      border: 1px solid red;
    }
  }

  .ant-checkbox-wrapper:hover {
    color: ${({ theme }) => theme?.colors?.primary};
  }

  .ant-checkbox-wrapper:hover .ant-checkbox .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled):after {
    border-color: ${({ theme }) => theme?.colors?.primary} !important;
  }

  .ant-checkbox-wrapper .ant-checkbox:after {
    border-color: ${({ theme }) => theme?.colors?.primary} !important;
  }

  .ant-checkbox-wrapper:active {
    color: ${({ theme }) => theme?.colors?.primary};
  }
`;

const radioButton = css`
  .ant-radio-wrapper .ant-radio-input {
    width: 22px;
    height: 22px;
  }

  .ant-radio-wrapper .ant-radio .ant-radio-inner {
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme?.colors?.newtral};
    color: ${({ theme }) => theme?.colors?.newtral};
  }

  .ant-radio-wrapper .ant-radio.ant-radio-checked .ant-radio-inner {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .ant-radio-wrapper:hover {
    color: ${({ theme }) => theme?.colors?.newtral};
  }

  .ant-radio-wrapper:hover .ant-radio .ant-radio-inner {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-radio-wrapper .ant-radio:active .ant-radio-inner {
    color: ${({ theme }) => theme?.colors?.newtral};
  }
`;

const switchToggle = css``;

const select = css`
  .ant-select-dropdown
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${({ theme }) => theme?.colors?.primary} !important;
    color: ${({ theme }) => theme?.colors?.newtralLightest} !important;
  }

  .ant-tree-select-dropdown .ant-select-tree {
    .ant-select-tree-switcher {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
      height: 32px;
      background-color: ${({ theme }) => theme?.colors?.primary} !important;
      color: ${({ theme }) => theme?.colors?.newtralLightest} !important;

      display: flex;
      align-items: center;
    }

    .ant-select-tree-treenode {
      height: 32px;
    }

    .ant-select-tree-list-holder-inner
      .ant-select-tree-treenode
      .ant-select-tree-node-content-wrapper {
      height: 32px;

      display: flex;
      align-items: center;
    }
  }
`;

const input = css``;

const utility = { checkbox, radioButton, select, switchToggle, input };

export { utility };
