import styled from 'styled-components';

import { LinearProgress, Toolbar as MuiToolbar } from '@material-ui/core';

export const Toolbar = styled(MuiToolbar)`
  && {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    .title {
      margin: 0 auto;

      svg {
        height: 30px;
        width: 100px;
      }
    }

    .end-node {
      display: flex;
      justify-content: flex-end;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
      .title {
        height: 40px;
      }
    }
  }
`;

export const CustomProgressBar = styled(LinearProgress)`
  && {
    height: 4px;
    border-radius: 0;
  }
`;
