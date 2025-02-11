import { FC } from 'react';
import FAQSection from '@MainPageComponents/FAQSection';
import BonusExchangeSection from '@MainPageComponents/BonusExchangeSection';
import PrizesSection from '@MainPageComponents/PrizesSection';

const Main: FC = () => {
  return (
    <>
      <PrizesSection />
      <BonusExchangeSection />
      <FAQSection />
    </>
  );
};

export default Main;
