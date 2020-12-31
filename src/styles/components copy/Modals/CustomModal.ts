import styled from 'styled-components';

import { Modal as MuiModal } from '@material-ui/core';

export const Modal = styled(MuiModal)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .container {
    background-color: ${({ theme }) => theme.palette.background.paper};
    outline: 0;
    box-shadow: ${({ theme }) => theme.shadows[5]};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }
`;
