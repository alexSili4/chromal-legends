import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedHowToGetCardsConditions from '@AnimationBlocks/AnimatedHowToGetCardsConditions';
import HowToGetCardsSectionGoods from '@MainPageComponents/HowToGetCardsSectionGoods';
import { Container, Content, Section } from './HowToGetCardsSection.styled';
import { conditions, SectionsIds } from '@/constants';

const HowToGetCardsSection: FC = () => {
  return (
    <Section id={SectionsIds.cards}>
      <GeneralContainer>
        <Container>
          <SectionTitle text='Як отримати картки?' />
          <Content>
            <AnimatedHowToGetCardsConditions conditions={conditions} />
            <HowToGetCardsSectionGoods />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default HowToGetCardsSection;
