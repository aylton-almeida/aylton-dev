import { FC, useContext, useState } from "react";

import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import AppBar from "@components/AppBar";
import OpacityTransition from "@components/animations/OpacityTransition";
import { MuiThemeProvider } from "@material-ui/core";

import { GlobalStyle } from "@styles/global";
import { createAppTheme } from "../styles/theme";
import { AppBarState } from "@store/AppBarContext";
import { ThemeState } from "@store/ThemeContext";
import { RootContext } from "@store/index";

const RootApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  const {
    appBar: [{ hidden }],
    theme: [{ primary, type }],
  } = useContext(RootContext);

  return (
    <MuiThemeProvider theme={createAppTheme(type, primary)}>
      <ThemeProvider theme={createAppTheme(type, primary)}>
        <AppBar />
        <OpacityTransition route={router.route}>
          <Component {...pageProps} />
        </OpacityTransition>
        <GlobalStyle />
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

const MyApp: FC<AppProps> = (props) => {
  const [appBarState, setAppBarState] = useState<AppBarState>({
    hidden: true,
  });
  const [themeState, setThemeState] = useState<ThemeState>({ type: "light" });

  return (
    <RootContext.Provider
      value={{
        appBar: [appBarState, setAppBarState],
        theme: [themeState, setThemeState],
      }}
    >
      <RootApp {...props} />
    </RootContext.Provider>
  );
};

export default MyApp;
