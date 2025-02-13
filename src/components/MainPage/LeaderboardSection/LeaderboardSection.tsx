import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import LeaderboardSectionHowToJoin from '@MainPageComponents/LeaderboardSectionHowToJoin';
import LeaderboardSectionShowLeaderboardBtn from '@MainPageComponents/LeaderboardSectionShowLeaderboardBtn';
import { Container, Section } from './LeaderboardSection.styled';

const LeaderboardSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <LeaderboardSectionHowToJoin />
          <LeaderboardSectionShowLeaderboardBtn />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default LeaderboardSection;
