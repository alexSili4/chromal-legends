import styled from '@emotion/styled';
import { IStyledProps } from './GeneralContainer.types';

export const StyledContainer = styled.div<IStyledProps>`
  position: ${({ isPositionRelative }) => isPositionRelative && 'relative'};
  width: 100%;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
    max-width: ${({ theme: { container, padding } }) =>
      container.mobile + padding.container * 2}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ theme: { container, padding } }) =>
      container.desktop + padding.container * 2}px;
  }
`;
