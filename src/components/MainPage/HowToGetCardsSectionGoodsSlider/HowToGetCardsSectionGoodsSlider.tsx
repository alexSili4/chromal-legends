import { FC } from 'react';
import {
  StyledSwiper,
  StyledSwiperSlide,
} from './HowToGetCardsSectionGoodsSlider.styled';
import HowToGetCardsSectionGoodDetails from '@MainPageComponents/HowToGetCardsSectionGoodDetails';
import { IProps } from './HowToGetCardsSectionGoodsSlider.types';

const HowToGetCardsSectionGoodsSlider: FC<IProps> = ({
  partnersGoods,
  gapMob,
  gapDesk,
  slideWidthMob,
  slideWidthDesk,
}) => {
  return (
    <StyledSwiper slidesPerView='auto' grabCursor>
      {partnersGoods.map(({ slug, icon }, index) => {
        const good = `${
          import.meta.env.VITE_APP_PARTNERS_GOODS_BASE_URL
        }/${slug}`;
        const img = `${
          import.meta.env.VITE_APP_PARTNERS_GOOD_IMG_BASE_URL
        }/${icon}`;

        return (
          <StyledSwiperSlide
            key={index}
            gapMob={gapMob}
            gapDesk={gapDesk}
            slideWidthMob={slideWidthMob}
            slideWidthDesk={slideWidthDesk}
          >
            <HowToGetCardsSectionGoodDetails good={good} img={img} />
          </StyledSwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

export default HowToGetCardsSectionGoodsSlider;
