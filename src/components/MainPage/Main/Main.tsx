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
import { IProps } from './Main.types';

const Main: FC<IProps> = ({ partnersGoods, clans }) => {
  return (
    <>
      <Container>
        <AboutSection />
        <LeagueSection />
      </Container>
      <LeaderboardSection clans={clans} />
      <Container>
        <HowToGetCardsSection partnersGoods={partnersGoods} />
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
