import styled from '@emotion/styled';
import { IStyledListWrapProps } from './FAQList.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;
`;

export const ListWrap = styled.div<IStyledListWrapProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    max-height: ${({ height }) => height}px;
    overflow-y: hidden;
    transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;

export const Button = styled.button`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;
