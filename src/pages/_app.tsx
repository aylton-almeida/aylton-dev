import { FC, useContext } from "react";

import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import AppBar from "@components/AppBar";
import OpacityTransition from "@components/animations/OpacityTransition";
import { MuiThemeProvider } from "@material-ui/core";

import { GlobalStyle } from "@styles/global";
import { DefaultRootValue, RootContext } from "@store/index";
import theme from "../styles/theme";

const RootApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  const {
    appBar: [{ hidden }],
  } = useContext(RootContext);

  return (
    <>
      {!hidden && <AppBar />}
      <OpacityTransition route={router.route}>
        <Component {...pageProps} />
      </OpacityTransition>
      <GlobalStyle />
    </>
  );
};

const MyApp: FC<AppProps> = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <RootContext.Provider value={DefaultRootValue}>
          <RootApp {...props} />
        </RootContext.Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default MyApp;
