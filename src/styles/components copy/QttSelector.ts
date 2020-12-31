import styled from 'styled-components';

import { ButtonGroup as MuiButtonGroup } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const ButtonGroup = styled(MuiButtonGroup)`
  && {
    height: 100%;

    & > :first-child,
    & > :nth-child(2) {
      border-right: none;
    }

    & > :nth-child(2),
    & > :last-child {
      border-left: none;
    }

    button {
      color: ${grey[900]};
      border: 1px solid ${grey[500]};
    }
  }
`;
