import { FC } from "react";

import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import AppBar from "@components/AppBar";
import OpacityTransition from "@components/animations/OpacityTransition";
import { MuiThemeProvider } from "@material-ui/core";

import { GlobalStyle } from "@styles/global";
import { DefaultRootValue, RootContext } from "@store/index";
import theme from "../styles/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <RootContext.Provider value={DefaultRootValue}>
          <AppBar />
          <OpacityTransition route={router.route}>
            <Component {...pageProps} />
          </OpacityTransition>
          <GlobalStyle />
        </RootContext.Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default MyApp;
