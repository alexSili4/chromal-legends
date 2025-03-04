import { FC, useState } from 'react';
import { IProps } from './AboutSectionArtifactsSlider.types';
import { Swiper } from 'swiper/react';
import ISwiper from 'swiper';
import { Navigation } from 'swiper/modules';
import AboutSectionArtifactsSliderControls from '@MainPageComponents/AboutSectionArtifactsSliderControls';
import AboutSectionArtifactDetails from '@MainPageComponents/AboutSectionArtifactDetails';
import { StyledSwiperSlide } from './AboutSectionArtifactsSlider.styled';

const AboutSectionArtifactsSlider: FC<IProps> = ({
  artifacts,
  updateActiveArtifact,
}) => {
  const [isHiddenPrevBtn, setIsHiddenPrevBtn] = useState<boolean>(true);
  const [isHiddenNextBtn, setIsHiddenNextBtn] = useState<boolean>(false);

  const onSwipe = (swiper: ISwiper) => {
    const { name } = artifacts[swiper.activeIndex];

    const direction = swiper.activeIndex > swiper.previousIndex ? 1 : -1;
    const bounceOffset = 100 * direction;

    swiper.translateTo(swiper.translate - bounceOffset, 300, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex, 600);
      updateActiveArtifact(name);
      setIsHiddenPrevBtn(swiper.isBeginning);
      setIsHiddenNextBtn(swiper.isEnd);
    }, 300);
  };

  const onDestroy = () => {
    updateActiveArtifact(null);
  };

  return (
    <Swiper
      onDestroy={onDestroy}
      onSwiper={onSwipe}
      onSlideChange={onSwipe}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      speed={900}
      grabCursor
    >
      {artifacts.map(({ name, desc, artifacts, logo, preview }, index) => (
        <StyledSwiperSlide key={index}>
          <AboutSectionArtifactDetails
            name={name}
            desc={desc}
            logo={logo}
            artifacts={artifacts}
            preview={preview}
          />
        </StyledSwiperSlide>
      ))}
      <AboutSectionArtifactsSliderControls
        isHiddenPrevBtn={isHiddenPrevBtn}
        isHiddenNextBtn={isHiddenNextBtn}
      />
    </Swiper>
  );
};

export default AboutSectionArtifactsSlider;
