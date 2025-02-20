import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import {
  Container,
  SliderBtn,
} from './AboutSectionArtifactsSliderControls.styled';
import PrevBtn from '@/icons/about/prev-btn.svg?react';
import NextBtn from '@/icons/about/next-btn.svg?react';
import { IProps } from './AboutSectionArtifactsSliderControls.types';

const AboutSectionArtifactsSliderControls: FC<IProps> = ({
  isHiddenNextBtn,
  isHiddenPrevBtn,
}) => {
  const swiper = useSwiper();

  const onNextBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.slideNext();
  };

  const onPrevBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.slidePrev();
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

export default AboutSectionArtifactsSliderControls;
