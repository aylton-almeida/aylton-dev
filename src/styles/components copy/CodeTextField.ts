import styled from 'styled-components';

export const Container = styled.div`
  .inputWidth {
    flex: 1;
    margin-right: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
