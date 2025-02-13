import { Goods } from '@/types/goods.types.ts';

export interface IProps {
  goods: Goods;
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
