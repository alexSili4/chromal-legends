import styled from '@emotion/styled';
import { IStyledContainerProps } from './GetPrizeModalWinContent.types';

export const Container = styled.div<IStyledContainerProps>`
  border: 7px solid #052d44;
  border-radius: 24px;
  background-color: #ffe600;
  padding: ${({ theme: { spacing }, isSuccess }) =>
    `${spacing(isSuccess ? 20 : 11)}px ${spacing(isSuccess ? 14 : 8)}px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing }, isSuccess }) =>
      `${spacing(isSuccess ? 39 : 7)}px ${spacing(
        isSuccess ? 27 : 8
      )}px ${spacing(isSuccess ? 39 : 13)}px`};
  }
`;
