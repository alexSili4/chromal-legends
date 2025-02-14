import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './LeaderboardSectionTeamsList.types';
import {
  Container,
  Content,
  List,
  ListWrap,
} from './LeaderboardSectionTeamsList.styled';
import { NumberOrNull } from '@/types/types';

const LeaderboardSectionTeamsList: FC<IProps> = () => {
  const [contentHeight, setContentHeight] = useState<NumberOrNull>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef?.current?.scrollHeight) {
      setContentHeight(containerRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    console.log(contentHeight);
  });

  return (
    <Container ref={containerRef}>
      <Content height={contentHeight}>
        <ListWrap height={contentHeight}>
          <List></List>
        </ListWrap>
      </Content>
    </Container>
  );
};

export default LeaderboardSectionTeamsList;
