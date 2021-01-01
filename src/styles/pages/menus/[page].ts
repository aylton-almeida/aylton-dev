import { kDesktopAppBarHeight, kMobileAppBarHeight } from "@utils/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(100% - ${kMobileAppBarHeight}px);
  width: 100%;

  * {
    transition: all ${({ theme }) => theme.transitions.duration.short}ms;
  }

  .layout,
  .nav-container {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }

  .layout-container {
    flex: 5;
    position: relative;

    .layout {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  nav.nav-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-card {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      background-color: ${({ theme }) => theme.palette.background.default};
      box-shadow: ${({ theme }) => theme.shadows[2]};
      border-radius: ${({ theme }) => theme.shape.borderRadius}px;
      list-style-type: none;

      height: 100%;
      width: 100%;

      li {
        height: 48px;
        width: 48px;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;

    height: calc(100% - ${kDesktopAppBarHeight}px);

    .layout-container {
      flex: 4;

      .layout {
        padding: ${({ theme }) => theme.spacing(6)}px;
      }
    }

    nav.nav-container {
      flex: 2;

      .nav-card {
        flex-direction: column;

        padding: 0;
        height: 70%;
        width: 90%;

        li {
          height: 56px;
          width: 80%;
        }
      }
    }
  }
`;
