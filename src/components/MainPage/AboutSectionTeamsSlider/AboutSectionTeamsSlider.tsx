import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProps } from './AboutSectionTeamsSlider.types';
import { Navigation } from 'swiper/modules';
import ISwiper from 'swiper';
import AboutSectionTeamDetails from '@MainPageComponents/AboutSectionTeamDetails';
import AboutSectionTeamsSliderControls from '@MainPageComponents/AboutSectionTeamsSliderControls';

const AboutSectionTeamsSlider: FC<IProps> = ({ teams, updateActiveTeam }) => {
  const [isHiddenPrevBtn, setIsHiddenPrevBtn] = useState<boolean>(true);
  const [isHiddenNextBtn, setIsHiddenNextBtn] = useState<boolean>(false);

  const onSwipe = (swiper: ISwiper) => {
    const { name } = teams[swiper.activeIndex];

    const direction = swiper.activeIndex > swiper.previousIndex ? 1 : -1;
    const bounceOffset = 100 * direction;

    swiper.translateTo(swiper.translate - bounceOffset, 400, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex, 800); // 600 — основная анимация
      updateActiveTeam(name);
      setIsHiddenPrevBtn(swiper.isBeginning);
      setIsHiddenNextBtn(swiper.isEnd);
    }, 400);
  };

  const onDestroy = () => {
    updateActiveTeam(null);
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
      {teams.map(({ name, desc, characters, logo, preview }, index) => (
        <SwiperSlide key={index}>
          <AboutSectionTeamDetails
            name={name}
            desc={desc}
            characters={characters}
            logo={logo}
            preview={preview}
          />
        </SwiperSlide>
      ))}
      <AboutSectionTeamsSliderControls
        isHiddenPrevBtn={isHiddenPrevBtn}
        isHiddenNextBtn={isHiddenNextBtn}
      />
    </Swiper>
  );
};

export default AboutSectionTeamsSlider;
