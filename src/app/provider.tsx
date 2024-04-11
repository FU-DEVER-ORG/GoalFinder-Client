"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "@/style/theme";
import { Provider } from "react-redux";
import { store } from "@/store";
import GlobalStyle from "@/style/global";
import ModalDialog from "@/components/layouts/modalPost";
type Props = {
  children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.default}>
        <ModalDialog />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default ProviderComponents;
