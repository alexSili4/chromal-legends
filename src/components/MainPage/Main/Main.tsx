import { FC } from 'react';
import FAQSection from '@MainPageComponents/FAQSection';
import BonusExchangeSection from '@MainPageComponents/BonusExchangeSection';
import PrizesSection from '@MainPageComponents/PrizesSection';
import CollectibleSetsSection from '@MainPageComponents/CollectibleSetsSection';
import HowToGetCardsSection from '@MainPageComponents/HowToGetCardsSection';
import LeaderboardSection from '@MainPageComponents/LeaderboardSection';
import LeagueSection from '@MainPageComponents/LeagueSection';

const Main: FC = () => {
  return (
    <>
      <LeagueSection />
      <LeaderboardSection />
      <HowToGetCardsSection />
      <CollectibleSetsSection />
      <PrizesSection />
      <BonusExchangeSection />
      <FAQSection />
    </>
  );
};

export default Main;
