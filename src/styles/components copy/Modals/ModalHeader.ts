import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${({ theme }) => theme.spacing(1, 2)};
    width: 100%;
  }
`;
