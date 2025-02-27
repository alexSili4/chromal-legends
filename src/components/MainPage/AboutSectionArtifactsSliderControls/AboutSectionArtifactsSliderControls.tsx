import { FC } from 'react';
import {
  Container,
  SliderBtn,
} from './AboutSectionArtifactsSliderControls.styled';
import PrevBtn from '@/icons/about/prev-btn.svg?react';
import NextBtn from '@/icons/about/next-btn.svg?react';
import { IProps } from './AboutSectionArtifactsSliderControls.types';
import { useSliderControls } from '@/hooks';

const AboutSectionArtifactsSliderControls: FC<IProps> = ({
  isHiddenNextBtn,
  isHiddenPrevBtn,
}) => {
  const { onNextBtnClick, onPrevBtnClick } = useSliderControls();

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
