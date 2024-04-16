"use client";
import React from "react";

import { ThemeProvider } from "styled-components";
import { themes } from "@/style/theme";
import { Provider } from "react-redux";
import { store } from "@/store";

import GlobalStyle from "@/style/global";
import ModalDialog from "@/components/core/common/ModalPost";
import StyledComponentsRegistry from "@/services/base/styledComponentsRegistry";
import { AntdRegistry } from '@ant-design/nextjs-registry';


type Props = {
  children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
  return (
    <>
      <StyledComponentsRegistry>
        <Provider store={store}>
          <ThemeProvider theme={themes.default}>
            <ModalDialog />
            <GlobalStyle />
            <AntdRegistry>
              {children}
            </AntdRegistry>
          </ThemeProvider>
        </Provider>
      </StyledComponentsRegistry>
    </>
  );
};

export default ProviderComponents;
