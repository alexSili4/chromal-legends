import { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { IProps } from './LeaderboardSectionTournamentsSlider.types';
import LeaderboardSectionTournamentDetails from '@MainPageComponents/LeaderboardSectionTournamentDetails';
import LeaderboardSectionTournamentsSliderControls from '@MainPageComponents/LeaderboardSectionTournamentsSliderControls';
import { Navigation } from 'swiper/modules';
import ISwiper from 'swiper';
import { StyledSwiper } from './LeaderboardSectionTournamentsSlider.styled';

const LeaderboardSectionTournamentsSlider: FC<IProps> = ({ tournaments }) => {
  const [isHiddenPrevBtn, setIsHiddenPrevBtn] = useState<boolean>(true);
  const [isHiddenNextBtn, setIsHiddenNextBtn] = useState<boolean>(false);

  const onSwipe = (swiper: ISwiper) => {
    const direction = swiper.activeIndex > swiper.previousIndex ? 1 : -1;
    const bounceOffset = 100 * direction;

    swiper.translateTo(swiper.translate - bounceOffset, 300, false);

    setTimeout(() => {
      swiper.slideTo(swiper.activeIndex, 600);
      setIsHiddenPrevBtn(swiper.isBeginning);
      setIsHiddenNextBtn(swiper.isEnd);
    }, 300);
  };

  return (
    <StyledSwiper
      slidesPerView={1}
      onSwiper={onSwipe}
      onSlideChange={onSwipe}
      modules={[Navigation]}
      speed={900}
      grabCursor
    >
      {tournaments.map(({ clans, title }, index) => (
        <SwiperSlide key={index}>
          <LeaderboardSectionTournamentDetails title={title} clans={clans} />
        </SwiperSlide>
      ))}
      <LeaderboardSectionTournamentsSliderControls
        isHiddenNextBtn={isHiddenNextBtn}
        isHiddenPrevBtn={isHiddenPrevBtn}
      />
    </StyledSwiper>
  );
};

export default LeaderboardSectionTournamentsSlider;
