import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './LeaderboardSectionTeamsList.types';
import {
  Container,
  Content,
  List,
  ListItem,
  ListContainer,
} from './LeaderboardSectionTeamsList.styled';
import { NumberOrNull } from '@/types/types';
import LeaderboardSectionTeamDetails from '@MainPageComponents/LeaderboardSectionTeamDetails';

const LeaderboardSectionTeamsList: FC<IProps> = ({ teams }) => {
  const [contentHeight, setContentHeight] = useState<NumberOrNull>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef?.current?.scrollHeight) {
      setContentHeight(containerRef.current.clientHeight);
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <Content height={contentHeight}>
        <ListContainer height={contentHeight}>
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
