import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/globalStyles";
import store from "../utils/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

const ThemeProviderWithStore = ({ children }:{ children:React.ReactNode }) => {
  let theme = useSelector((state: any) => state.themeSlice.theme) || {};
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
