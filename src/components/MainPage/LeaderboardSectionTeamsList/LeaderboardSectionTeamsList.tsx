import { FC } from 'react';
import { IProps } from './LeaderboardSectionTeamsList.types';
import {
  Container,
  Content,
  List,
  ListItem,
  ListContainer,
} from './LeaderboardSectionTeamsList.styled';
import LeaderboardSectionTeamDetails from '@MainPageComponents/LeaderboardSectionTeamDetails';

const LeaderboardSectionTeamsList: FC<IProps> = ({ teams }) => {
  return (
    <Container>
      <Content>
        <ListContainer>
          <List>
            {teams.map(({ name, rank, score }, index) => (
              <ListItem key={index}>
                <LeaderboardSectionTeamDetails
                  name={name}
                  rank={rank}
                  score={score}
                />
              </ListItem>
            ))}
          </List>
        </ListContainer>
      </Content>
    </Container>
  );
};

export default LeaderboardSectionTeamsList;
