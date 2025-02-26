import { PartnersGoods } from '@/types/partnersGoods.types';

export interface IProps {
  partnersGoods: PartnersGoods;
  gapMob: number;
  gapDesk: number;
  slideWidthMob: number;
  slideWidthDesk: number;
}

export interface IStyledSwiperSlideProps {
  slideWidthMob: number;
  slideWidthDesk: number;
  gapMob: number;
  gapDesk: number;
}
