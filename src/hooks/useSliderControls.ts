import { IUseSliderControls } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useSwiper } from 'swiper/react';

const useSliderControls = (): IUseSliderControls => {
  const swiper = useSwiper();

  const onNextBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.translateTo(swiper.translate + 50, 400, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex + 1, 600);
    }, 400);
  };

  const onPrevBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.translateTo(swiper.translate - 50, 400, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex - 1, 600);
    }, 400);
  };

  return { onPrevBtnClick, onNextBtnClick };
};

export default useSliderControls;
