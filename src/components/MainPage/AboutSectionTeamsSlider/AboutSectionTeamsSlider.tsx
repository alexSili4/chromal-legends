import { FC, useState } from 'react';
import { Swiper } from 'swiper/react';
import { IProps } from './AboutSectionTeamsSlider.types';
import { Navigation } from 'swiper/modules';
import ISwiper from 'swiper';
import AboutSectionTeamDetails from '@MainPageComponents/AboutSectionTeamDetails';
import AboutSectionTeamsSliderControls from '@MainPageComponents/AboutSectionTeamsSliderControls';
import { StyledSwiperSlide } from './AboutSectionTeamsSlider.styled';

const AboutSectionTeamsSlider: FC<IProps> = ({ teams, updateActiveTeam }) => {
  const [isHiddenPrevBtn, setIsHiddenPrevBtn] = useState<boolean>(true);
  const [isHiddenNextBtn, setIsHiddenNextBtn] = useState<boolean>(false);

  const onSwipe = (swiper: ISwiper) => {
    const { name } = teams[swiper.activeIndex];

    const direction = swiper.activeIndex > swiper.previousIndex ? 1 : -1;
    const bounceOffset = 100 * direction;

    swiper.translateTo(swiper.translate - bounceOffset, 300, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex, 600);
      updateActiveTeam(name);
      setIsHiddenPrevBtn(swiper.isBeginning);
      setIsHiddenNextBtn(swiper.isEnd);
    }, 300);
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
        <StyledSwiperSlide key={index}>
          <AboutSectionTeamDetails
            name={name}
            desc={desc}
            characters={characters}
            logo={logo}
            preview={preview}
          />
        </StyledSwiperSlide>
      ))}
      <AboutSectionTeamsSliderControls
        isHiddenPrevBtn={isHiddenPrevBtn}
        isHiddenNextBtn={isHiddenNextBtn}
      />
    </Swiper>
  );
};

export default AboutSectionTeamsSlider;
