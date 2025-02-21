import { FC } from 'react';
import FAQSection from '@MainPageComponents/FAQSection';
import BonusExchangeSection from '@MainPageComponents/BonusExchangeSection';
import PrizesSection from '@MainPageComponents/PrizesSection';
import CollectibleSetsSection from '@MainPageComponents/CollectibleSetsSection';
import HowToGetCardsSection from '@MainPageComponents/HowToGetCardsSection';
import LeaderboardSection from '@MainPageComponents/LeaderboardSection';
import LeagueSection from '@MainPageComponents/LeagueSection';
import AboutSection from '@MainPageComponents/AboutSection';
import { Container } from './Main.styled';

const Main: FC = () => {
  return (
    <>
      <Container>
        <AboutSection />
        <LeagueSection />
      </Container>
      <LeaderboardSection />
      <Container>
        <HowToGetCardsSection />
        <CollectibleSetsSection />
      </Container>
      <PrizesSection />
      <Container>
        <BonusExchangeSection />
        <FAQSection />
      </Container>
    </>
  );
};

export default Main;
