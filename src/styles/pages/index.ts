import { CategoryList } from "@styles/theme";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  height: 100%;
  width: 100%;

  &,
  * {
    transition: all ${({ theme }) => theme.transitions.duration.short}ms;
  }

  .img-container {
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    box-shadow: ${({ theme }) => theme.shadows[3]};

    height: 240px;
    width: 240px;

    img {
      object-fit: cover;
      border-radius: ${({ theme }) => theme.shape.borderRadius}px;

      height: 100%;
      width: 100%;
    }
  }

  .icons {
    display: flex;
    flex-direction: row;

    > button {
      margin: ${({ theme }) => theme.spacing(0, 2)};
      height: 48px;
      width: 48px;
    }
  }

  .connect-button {
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    box-shadow: ${({ theme }) => theme.shadows[2]};

    padding: ${({ theme }) => theme.spacing(1, 2)};

    div {
      display: flex;
      align-items: center;
      color: ${CategoryList[CategoryList.length - 1][1]};

      span {
        margin-left: ${({ theme }) => theme.spacing(2)}px;
        font-size: 120%;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .img-container {
      height: 280px;
      width: 280px;
    }

    .icons {
      > button {
        margin: ${({ theme }) => theme.spacing(0, 3)};
        height: 64px;
        width: 64px;
      }
    }

    .connect-button {
      div {
        span {
          font-size: 140%;
        }
      }
    }
  }
`;
