import { FC } from 'react';
import {
  BtnTitle,
  BtnWrap,
  Button,
  Container,
} from './LeaderboardSectionShowLeaderboardBtn.styled';
import LeaderboardBtnIcon from '@/icons/leaderboard/leaderboard-btn.svg?react';
import { IProps } from './LeaderboardSectionShowLeaderboardBtn.types';

const LeaderboardSectionShowLeaderboardBtn: FC<IProps> = ({ onClick }) => {
  return (
    <Container>
      <BtnWrap>
        <Button type='button' onClick={onClick}>
          <BtnTitle>рейтинг кланів</BtnTitle>
          <LeaderboardBtnIcon />
        </Button>
      </BtnWrap>
    </Container>
  );
};

export default LeaderboardSectionShowLeaderboardBtn;
