import { FC } from 'react';
import {
  Container,
  Content,
  Subtitle,
  Title,
} from './LeaderboardModalWinContent.styled';
import LeaderboardSectionTeamsList from '@MainPageComponents/LeaderboardSectionTeamsList';
import { IProps } from './LeaderboardModalWinContent.types';

const LeaderboardModalWinContent: FC<IProps> = ({ clans }) => {
  return (
    <Container>
      <Title>Рейтинг кланів</Title>
      <Content>
        <Subtitle>Турнір «Приборкувачі Тіней»</Subtitle>
        <LeaderboardSectionTeamsList clans={clans} />
      </Content>
    </Container>
  );
};

export default LeaderboardModalWinContent;
