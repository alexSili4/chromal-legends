import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedHowToJoinLeaderboard from '@AnimationBlocks/AnimatedHowToJoinLeaderboard';
import LeaderboardSectionShowLeaderboardBtn from '@MainPageComponents/LeaderboardSectionShowLeaderboardBtn';
import { Container, Section, Content } from './LeaderboardSection.styled';
import SectionTitle from '@MainPageComponents/SectionTitle';

const LeaderboardSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <Content>
            <SectionTitle text='Як долучитись до турніру?' />
            <AnimatedHowToJoinLeaderboard />
          </Content>
          <LeaderboardSectionShowLeaderboardBtn />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default LeaderboardSection;
