import { FC } from 'react';
import FAQSection from '@MainPageComponents/FAQSection';
import BonusExchangeSection from '@MainPageComponents/BonusExchangeSection';
import ExclusiveAwardsSection from '@MainPageComponents/ExclusiveAwardsSection';

const Main: FC = () => {
  return (
    <>
      <ExclusiveAwardsSection />
      <BonusExchangeSection />
      <FAQSection />
    </>
  );
};

export default Main;
