import { FC } from 'react';
import {
  StyledSwiper,
  StyledSwiperSlide,
} from './HowToGetCardsSectionGoodsSlider.styled';
import HowToGetCardsSectionGoodDetails from '@MainPageComponents/HowToGetCardsSectionGoodDetails';
import { IProps } from './HowToGetCardsSectionGoodsSlider.types';

const HowToGetCardsSectionGoodsSlider: FC<IProps> = ({
  goods,
  gapMob,
  gapDesk,
  slideWidthMob,
  slideWidthDesk,
}) => {
  return (
    <StyledSwiper slidesPerView='auto' grabCursor>
      {goods.map((_, index) => (
        <StyledSwiperSlide
          key={index}
          gapMob={gapMob}
          gapDesk={gapDesk}
          slideWidthMob={slideWidthMob}
          slideWidthDesk={slideWidthDesk}
        >
          <HowToGetCardsSectionGoodDetails />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default HowToGetCardsSectionGoodsSlider;
