import { FC } from 'react';
import { Container, Content, Title } from './LeaderboardModalWinContent.styled';
import { IProps } from './LeaderboardModalWinContent.types';
import LeaderboardSectionTournamentsSlider from '@MainPageComponents/LeaderboardSectionTournamentsSlider';

const LeaderboardModalWinContent: FC<IProps> = ({ tournaments }) => {
  return (
    <Container>
      <Title>Рейтинг кланів</Title>
      <Content>
        <LeaderboardSectionTournamentsSlider tournaments={tournaments} />
      </Content>
    </Container>
  );
};

export default LeaderboardModalWinContent;
