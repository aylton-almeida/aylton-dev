import { ButtonBase } from "@material-ui/core";
import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled(ButtonBase)<ContainerProps>`
  && {
    box-shadow: ${({ theme }) => theme.shadows[2]};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.background.paper};

    min-height: 36px;
    min-width: 36px;
    height: 100%;
    width: 100%;

    .MuiTouchRipple-child {
      background-color: ${({ color }) => color};
    }

    > :first-child {
      color: ${({ color }) => color};
    }

    .title {
      color: ${({ color }) => color};

      font-size: 140%;
      margin-left: ${({ theme }) => theme.spacing(3)}px;
    }
  }
`;
