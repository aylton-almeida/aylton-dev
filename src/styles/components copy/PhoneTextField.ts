import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .inputWidth {
    width: 60px;
    margin-right: ${({ theme }) => theme.spacing(1)}px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    .inputWidth {
      width: 45px;
      margin-right: ${({ theme }) => theme.spacing(0.5)}px;
    }
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;
