import { FC, useState } from 'react';
import { IProps } from './AboutSectionArtifactsSlider.types';
import { Swiper, SwiperSlide } from 'swiper/react';
import ISwiper from 'swiper';
import { Navigation } from 'swiper/modules';
import AboutSectionArtifactsSliderControls from '@MainPageComponents/AboutSectionArtifactsSliderControls';
import AboutSectionArtifactDetails from '@MainPageComponents/AboutSectionArtifactDetails';

const AboutSectionArtifactsSlider: FC<IProps> = ({
  artifacts,
  updateActiveArtifact,
}) => {
  const [isHiddenPrevBtn, setIsHiddenPrevBtn] = useState<boolean>(true);
  const [isHiddenNextBtn, setIsHiddenNextBtn] = useState<boolean>(false);

  const onSwipe = ({ activeIndex, isBeginning, isEnd }: ISwiper) => {
    const { name } = artifacts[activeIndex];

    updateActiveArtifact(name);

    setIsHiddenPrevBtn(isBeginning);
    setIsHiddenNextBtn(isEnd);
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
      autoHeight
    >
      {artifacts.map(({ name, desc, artifacts, logo, preview }, index) => (
        <SwiperSlide key={index}>
          <AboutSectionArtifactDetails
            name={name}
            desc={desc}
            logo={logo}
            artifacts={artifacts}
            preview={preview}
          />
        </SwiperSlide>
      ))}
      <AboutSectionArtifactsSliderControls
        isHiddenPrevBtn={isHiddenPrevBtn}
        isHiddenNextBtn={isHiddenNextBtn}
      />
    </Swiper>
  );
};

export default AboutSectionArtifactsSlider;
