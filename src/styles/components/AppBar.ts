import { AppBar } from "@material-ui/core";
import styled from "styled-components";

export const CustomAppBar = styled(AppBar)`
  && {
    color: ${({ theme }) => theme.palette.primary.contrastText};

    transition: background-color
      ${({ theme }) => theme.transitions.duration.standard}ms;

    .toolbar {
      h6 {
        margin-left: ${({ theme }) => theme.spacing(2)}px;
        font-size: 140%;
      }
    }
  }
`;
