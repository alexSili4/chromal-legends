import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import { Container, SliderBtn } from './AboutSectionTeamsSliderControls.styled';
import PrevBtn from '@/icons/about/prev-btn.svg?react';
import NextBtn from '@/icons/about/next-btn.svg?react';
import { IProps } from './AboutSectionTeamsSliderControls.types';

const AboutSectionTeamsSliderControls: FC<IProps> = ({
  isHiddenNextBtn,
  isHiddenPrevBtn,
}) => {
  const swiper = useSwiper();

  const onNextBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.translateTo(swiper.translate + 50, 300, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex + 1, 600);
    }, 300);
  };

  const onPrevBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.translateTo(swiper.translate - 50, 300, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex - 1, 300);
    }, 300);
  };

  return (
    <Container>
      <SliderBtn
        type='button'
        onClick={onPrevBtnClick}
        isHiddenBtn={isHiddenPrevBtn}
      >
        <PrevBtn />
      </SliderBtn>
      <SliderBtn
        type='button'
        onClick={onNextBtnClick}
        isHiddenBtn={isHiddenNextBtn}
      >
        <NextBtn />
      </SliderBtn>
    </Container>
  );
};

export default AboutSectionTeamsSliderControls;
