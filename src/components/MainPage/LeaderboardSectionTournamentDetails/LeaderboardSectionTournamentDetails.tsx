import { FC } from 'react';
import LeaderboardSectionTeamsList from '@MainPageComponents/LeaderboardSectionTeamsList';
import {
  Container,
  Title,
  Background,
} from './LeaderboardSectionTournamentDetails.styled';
import { IProps } from './LeaderboardSectionTournamentDetails.types';

const LeaderboardSectionTournamentDetails: FC<IProps> = ({ title, clans }) => {
  return (
    <Background>
      <Container>
        <Title>Турнір «{title}»</Title>
        <LeaderboardSectionTeamsList clans={clans} />
      </Container>
    </Background>
  );
};

export default LeaderboardSectionTournamentDetails;
