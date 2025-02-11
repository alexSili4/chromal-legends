import { FC } from 'react';
import FAQSection from '@MainPageComponents/FAQSection';
import BonusExchangeSection from '@MainPageComponents/BonusExchangeSection';
import PrizesSection from '@MainPageComponents/PrizesSection';
import CollectibleSetsSection from '@MainPageComponents/CollectibleSetsSection';

const Main: FC = () => {
  return (
    <>
      <CollectibleSetsSection />
      <PrizesSection />
      <BonusExchangeSection />
      <FAQSection />
    </>
  );
};

export default Main;
