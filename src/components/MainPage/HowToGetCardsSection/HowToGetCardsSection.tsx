import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';

const HowToGetCardsSection: FC = () => {
  return (
    <Section>
      <GeneralComponents>
        <Container>
          <SectionTitle />
          <Content>
            <AnimatedHowToGetCardsConditions />
            <HowToGetCardsSectionGoods />
          </Content>
        </Container>
      </GeneralComponents>
    </Section>
  );
};

export default HowToGetCardsSection;
