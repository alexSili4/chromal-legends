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
    const index = activeIndex;
    const { name } = artifacts[index].artifact;

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
      {artifacts.map(
        (
          {
            name: currentArtifactName,
            desc: characterDesc,
            artifact: {
              artifacts,
              desc: artifactDesc,
              logo,
              name: artifactName,
            },
            img: {
              heightDesk,
              heightMob,
              img,
              leftDesk: imgLeftDesk,
              leftMob: imgLeftMob,
              topDesk: imgTopDesk,
              topMob: imgTopMob,
              widthDesk,
              widthMob,
            },
            crownPosition: {
              leftDesk: crownLeftDesk,
              leftMob: crownLeftMob,
              topDesk: crownTopDesk,
              topMob: crownTopMob,
            },
            paddingBottomMob,
          },
          index
        ) => (
          <SwiperSlide key={index}>
            <AboutSectionArtifactDetails
              artifacts={artifacts}
              artifactDesc={artifactDesc}
              logo={logo}
              artifactName={artifactName}
              characterDesc={characterDesc}
              currentArtifactName={currentArtifactName}
              crownLeftDesk={crownLeftDesk}
              crownLeftMob={crownLeftMob}
              crownTopDesk={crownTopDesk}
              crownTopMob={crownTopMob}
              heightDesk={heightDesk}
              heightMob={heightMob}
              img={img}
              imgLeftDesk={imgLeftDesk}
              imgLeftMob={imgLeftMob}
              imgTopDesk={imgTopDesk}
              imgTopMob={imgTopMob}
              widthDesk={widthDesk}
              widthMob={widthMob}
              paddingBottomMob={paddingBottomMob}
            />
          </SwiperSlide>
        )
      )}
      <AboutSectionArtifactsSliderControls
        isHiddenPrevBtn={isHiddenPrevBtn}
        isHiddenNextBtn={isHiddenNextBtn}
      />
    </Swiper>
  );
};

export default AboutSectionArtifactsSlider;
