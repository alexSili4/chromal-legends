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

const LeaderboardSectionTeamsList: FC<IProps> = ({ clans }) => {
  return (
    <Container>
      <Content>
        <ListContainer>
          <List>
            {clans.map(({ name, totalScore }, index) => (
              <ListItem key={index}>
                <LeaderboardSectionTeamDetails
                  name={name}
                  rank={index + 1}
                  score={totalScore}
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
