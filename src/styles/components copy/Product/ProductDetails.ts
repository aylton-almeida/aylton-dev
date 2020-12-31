import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  max-height: 75vh;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3, 2)};

  & > :not(:last-child),
  & > button {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }

  .img-container {
    height: 240px;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .title-container {
    width: 100%;

    & > :first-child {
      margin-bottom: ${({ theme }) => theme.spacing(1)}px;
    }
  }

  .button-container {
    width: 100%;

    & > button {
      width: 100%;
    }
  }

  .offer-details {
    width: 100%;

    & > :not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing(2)}px;
    }

    .chip {
      margin: 0;

      .MuiChip-root {
        color: ${({ theme }) => theme.palette.info.contrastText};
        background-color: ${({ theme }) => theme.palette.info.main};

        margin-bottom: ${({ theme }) => theme.spacing(3)}px;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    .img-container {
      height: 300px;
    }
  }
`;
