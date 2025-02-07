import styled from '@emotion/styled';
import bgImg from '@/images/header/video-bg.png';
import { IStyledContainerProps } from './HeaderVideo.types';

export const Container = styled.div<IStyledContainerProps>`
  width: 100%;
  aspect-ratio: 375 / 250;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: absolute;
    top: 150px;
    left: ${({ theme }) => theme.padding.container + 287}px;
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
    width: 660px;
    aspect-ratio: 660 / 440;
  }
`;
