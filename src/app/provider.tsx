"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "@/style/theme";
import { Provider } from "react-redux";
import { store } from "@/store";
import GlobalStyle from "@/style/global";
import ClientLayout from "@/components/layouts/clientLayout";
import ModalDialog from "@/components/modalPost";
type Props = {
  children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.default}>
        <ModalDialog />
        <GlobalStyle />
        <ClientLayout>{children}</ClientLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default ProviderComponents;
