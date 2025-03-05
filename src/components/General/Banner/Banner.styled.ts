import styled from '@emotion/styled';
import { IStyledImgProps } from './Banner.types';

export const Image = styled.img<IStyledImgProps>`
  width: 100vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isMob }) => isMob && 'none'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isDesk }) => isDesk && 'none'};
  }
`;
