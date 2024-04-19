'use client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { themes } from '@/style/themes';
import { store } from '@/store';
import GlobalStyle from '@/style/global';
import StyledComponentsRegistry from '@/services/base/styledComponentsRegistry';

type Props = {
  children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
  return (
    <>
      <StyledComponentsRegistry>
        <Provider store={store}>
          <ThemeProvider theme={themes.default}>
            <GlobalStyle />
            <AntdRegistry>{children}</AntdRegistry>
          </ThemeProvider>
        </Provider>
      </StyledComponentsRegistry>
    </>
  );
};

export default ProviderComponents;
