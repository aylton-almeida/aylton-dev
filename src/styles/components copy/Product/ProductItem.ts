import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .img-container {
    border: 1px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;

    button {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-add-container {
    .add-container {
      position: relative;

      width: 100%;
      height: 36px;

      & > button,
      .qtt-action-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        opacity: 1;
        transform: translate(0);
        z-index: 100;

        transition: all ${({ theme }) => theme.transitions.duration.standard}ms;

        width: 100%;

        &.hidden {
          transform: translate(50px, 0);
          opacity: 0;
          z-index: -1;
          pointer-events: none;

          &.qtt-action-container {
            transform: translate(-50px, 0);
          }
        }
      }

      .qtt-action-container {
        width: 100%;

        & > :first-child {
          width: 100%;
        }

        button {
          flex: 1;
        }
      }
    }
  }

  &.vertical {
    && > *,
    .info-add-container > * {
      min-height: 40px;
      margin-bottom: ${({ theme }) => theme.spacing(1)}px;
    }

    .img-container {
      width: 100%;
      height: 180px;
    }

    .info-add-container {
      width: 100%;
    }
  }

  &.horizontal {
    flex-direction: row;
    justify-content: space-between;

    height: 120px;

    .img-container {
      width: 45%;
      height: 100%;
    }

    .info-add-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      width: 50%;
      height: 100%;

      .add-container {
        .qtt-action-container {
          height: 30px;
        }
      }
    }
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    .img-container {
      height: 200px;
    }
  }
`;
