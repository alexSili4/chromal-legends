import { FC } from 'react';
import {
  Container,
  SliderBtn,
} from './LeaderboardSectionTournamentsSliderControls.styled';
import PrevBtn from '@/icons/leaderboard/prev-btn.svg?react';
import NextBtn from '@/icons/leaderboard/next-btn.svg?react';
import { IProps } from './LeaderboardSectionTournamentsSliderControls.types';
import { useSliderControls } from '@/hooks';

const LeaderboardSectionTournamentsSliderControls: FC<IProps> = ({
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

export default LeaderboardSectionTournamentsSliderControls;
