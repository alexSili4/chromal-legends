import { FC } from 'react';
import FAQSection from '@MainPageComponents/FAQSection';

const Main: FC = () => {
  return (
    <>
      <div>Про гру</div>
      <div>Суперліга Сільпо</div>
      <div>Як долучитись до турніру?</div>
      <div>Як отримати картки?</div>
      <div>Колекційні набори</div>
      <div>Ексклюзивні нагороди</div>
      <FAQSection />
    </>
  );
};

export default Main;
