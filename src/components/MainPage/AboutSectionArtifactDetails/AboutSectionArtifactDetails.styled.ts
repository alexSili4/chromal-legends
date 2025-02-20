import styled from '@emotion/styled';
import { IStyledContainerProps } from './AboutSectionArtifactDetails.types';

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ paddingBottomMob }) => paddingBottomMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(0)}px;
    padding-top: ${({ theme }) => theme.spacing(35)}px;
    padding-bottom: ${({ theme }) => theme.spacing(0)}px;
    padding-right: ${({ theme }) => theme.spacing(19)}px;
  }
`;
