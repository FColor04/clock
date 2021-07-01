/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, Provider } from 'react-redux';
import GlobalStyles from '../utils/globalStyles';
import store from '../utils/store';

const ThemeProviderWithStore = ({ children }:{ children:React.ReactNode }) => {
  const theme = useSelector((state: any) => state.themeSlice) || {};
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function MyApp({ Component, pageProps }:{ Component:any, pageProps:any }) {
  return (
    <Provider store={store}>
      <ThemeProviderWithStore>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProviderWithStore>
    </Provider>
  );
}

export default MyApp;
