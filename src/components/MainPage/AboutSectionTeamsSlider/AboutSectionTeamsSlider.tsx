import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProps } from './AboutSectionTeamsSlider.types';
import AboutSectionTeamDetails from '@MainPageComponents/AboutSectionTeamDetails';
import AboutSectionTeamsSliderControls from '@MainPageComponents/AboutSectionTeamsSliderControls';
import { Navigation } from 'swiper/modules';
import ISwiper from 'swiper';

const AboutSectionTeamsSlider: FC<IProps> = ({ teams, updateActiveTeam }) => {
  const [isHiddenPrevBtn, setIsHiddenPrevBtn] = useState<boolean>(true);
  const [isHiddenNextBtn, setIsHiddenNextBtn] = useState<boolean>(false);

  const onSwipe = ({ activeIndex, isBeginning, isEnd }: ISwiper) => {
    const index = activeIndex;
    const { name } = teams[index].team;

    updateActiveTeam(name);

    setIsHiddenPrevBtn(isBeginning);
    setIsHiddenNextBtn(isEnd);
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
      grabCursor
    >
      {teams.map(
        (
          {
            name: characterName,
            desc: characterDesc,
            team: { characters, desc: teamDesc, logo, name: teamName },
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
          },
          index
        ) => (
          <SwiperSlide key={index}>
            <AboutSectionTeamDetails
              characters={characters}
              teamDesc={teamDesc}
              logo={logo}
              teamName={teamName}
              characterDesc={characterDesc}
              characterName={characterName}
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
            />
          </SwiperSlide>
        )
      )}
      <AboutSectionTeamsSliderControls
        isHiddenPrevBtn={isHiddenPrevBtn}
        isHiddenNextBtn={isHiddenNextBtn}
      />
    </Swiper>
  );
};

export default AboutSectionTeamsSlider;
