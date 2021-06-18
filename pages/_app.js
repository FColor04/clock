import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/globalStyles";
import store from "../utils/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

const ThemeProviderWithStore = ({ children }) => {
  let theme = useSelector((state) => state.themeSlice.theme) || {};
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function MyApp({ Component, pageProps }) {
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
