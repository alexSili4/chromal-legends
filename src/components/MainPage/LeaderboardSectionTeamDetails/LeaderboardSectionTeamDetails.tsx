import { FC } from 'react';
import { IProps } from './LeaderboardSectionTeamDetails.types';
import { getTeamPlace } from '@/utils';
import { Container } from './LeaderboardSectionTeamDetails.styled';

const LeaderboardSectionTeamDetails: FC<IProps> = ({ name, rank, score }) => {
  const { isFirstPlace, isSecondPlace, isThirdPlace } = getTeamPlace(rank);

  return <Container>LeaderboardSectionTeamDetails</Container>;
};

export default LeaderboardSectionTeamDetails;
