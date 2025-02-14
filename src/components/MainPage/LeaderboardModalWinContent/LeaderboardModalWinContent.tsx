import { teams } from '@/constants';
import { FC } from 'react';
import {
  Container,
  Content,
  Subtitle,
  Title,
} from './LeaderboardModalWinContent.styled';
import LeaderboardSectionTeamsList from '@MainPageComponents/LeaderboardSectionTeamsList';

const LeaderboardModalWinContent: FC = () => {
  return (
    <Container>
      <Title>Рейтинг кланів</Title>
      <Content>
        <Subtitle>Турнір “Крижаних Легенд”</Subtitle>
        <LeaderboardSectionTeamsList teams={teams} />
      </Content>
    </Container>
  );
};

export default LeaderboardModalWinContent;
