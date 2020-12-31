import { kDesktopAppBarHeight, kMobileAppBarHeight } from "@utils/constants";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Recoleta';
    src: url('/static/fonts/Recoleta-Medium.otf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  html,body,#__next {
    color: black;
    background-color: ${({ theme }) => theme.palette.background.paper};
    overflow: hidden;

    height: 100%;
    width: 100%;
  }
`;
