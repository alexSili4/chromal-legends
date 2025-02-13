import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IStyledSwiperSlideProps } from './HowToGetCardsSectionGoodsSlider.types';

export const StyledSwiper = styled(Swiper)``;

export const StyledSwiperSlide = styled(SwiperSlide)<IStyledSwiperSlideProps>`
  width: ${({ slideWidthMob, gapMob }) => slideWidthMob + gapMob}px !important;
  padding-left: ${({ gapMob }) => gapMob}px;

  &:last-of-type {
    width: ${({ slideWidthMob, gapMob }) =>
      slideWidthMob + gapMob * 2}px !important;
    padding-right: ${({ gapMob }) => gapMob}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ slideWidthDesk, gapDesk }) =>
      slideWidthDesk + gapDesk}px !important;
    padding-left: ${({ gapDesk }) => gapDesk}px;

    &:last-of-type {
      width: ${({ slideWidthDesk, gapDesk }) =>
        slideWidthDesk + gapDesk * 2}px !important;
      padding-right: ${({ gapDesk }) => gapDesk}px;
    }
  }
`;
