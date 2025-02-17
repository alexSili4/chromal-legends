import { FC } from 'react';
import { IProps } from './LeaderboardSectionTeamDetails.types';
import { getTeamPlace } from '@/utils';
import {
  Container,
  Info,
  Name,
  NameWrap,
  Rank,
  RankWrap,
  Score,
  ScoreWrap,
} from './LeaderboardSectionTeamDetails.styled';
import Crown from '@/icons/leaderboard/crown.svg?react';
import FirstPlace from '@/icons/leaderboard/first-place.svg?react';
import SecondPlace from '@/icons/leaderboard/second-place.svg?react';
import ThirdPlace from '@/icons/leaderboard/third-place.svg?react';

const LeaderboardSectionTeamDetails: FC<IProps> = ({ name, rank, score }) => {
  const { isFirstPlace, isSecondPlace, isThirdPlace } = getTeamPlace(rank);

  return (
    <Container>
      <RankWrap>
        {isFirstPlace && <FirstPlace />}
        {isSecondPlace && <SecondPlace />}
        {isThirdPlace && <ThirdPlace />}
        <Rank>{rank}</Rank>
      </RankWrap>
      <Info>
        <NameWrap>
          <Name>{name}</Name>
        </NameWrap>
        <ScoreWrap>
          <Crown />
          <Score>{score}</Score>
        </ScoreWrap>
      </Info>
    </Container>
  );
};

export default LeaderboardSectionTeamDetails;
