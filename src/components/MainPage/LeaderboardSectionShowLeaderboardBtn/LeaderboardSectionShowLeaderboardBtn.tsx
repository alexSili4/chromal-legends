import { FC } from 'react';
import {
  BtnTitle,
  BtnWrap,
  Button,
  Container,
} from './LeaderboardSectionShowLeaderboardBtn.styled';
import LeaderboardBtnIcon from '@/icons/leaderboard/leaderboard-btn.svg?react';

const LeaderboardSectionShowLeaderboardBtn: FC = () => {
  return (
    <Container>
      <BtnWrap>
        <Button>
          <BtnTitle>рейтинг кланів</BtnTitle>
          <LeaderboardBtnIcon />
        </Button>
      </BtnWrap>
    </Container>
  );
};

export default LeaderboardSectionShowLeaderboardBtn;
