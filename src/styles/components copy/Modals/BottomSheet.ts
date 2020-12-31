import styled from 'styled-components';

import { Backdrop } from '@material-ui/core';

export const Container = styled(Backdrop)`
  && {
    z-index: ${({ theme }) => theme.zIndex.modal};
    display: flex;
    align-items: flex-end;

    .sheet {
      background: ${({ theme }) => theme.palette.background.paper};
      border-top-left-radius: ${({ theme }) => theme.shape.borderRadius}px;
      border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;

      width: 100%;
      max-height: 100%;
      height: fit-content;

      &.full-height {
        height: 100%;
      }
    }
  }
`;
