import { FC } from 'react';
import {
  StyledSwiper,
  StyledSwiperSlide,
} from './HowToGetCardsSectionGoodsSlider.styled';
import HowToGetCardsSectionGoodDetails from '@MainPageComponents/HowToGetCardsSectionGoodDetails';
import { IProps } from './HowToGetCardsSectionGoodsSlider.types';

const HowToGetCardsSectionGoodsSlider: FC<IProps> = ({ goods }) => {
  return (
    <StyledSwiper
      breakpoints={{
        1: {
          slidesPerView: 1.629,
          spaceBetween: 19,
        },
      }}
    >
      {goods.map((_, index) => (
        <StyledSwiperSlide key={index}>
          <HowToGetCardsSectionGoodDetails />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default HowToGetCardsSectionGoodsSlider;
