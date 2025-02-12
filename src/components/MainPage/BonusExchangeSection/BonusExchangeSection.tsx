import GeneralContainer from '@/components/General/GeneralContainer';
import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import AppLink from '@GeneralComponents/AppLink';
import AnimatedBonusExchangeSectionSteps from '@AnimationBlocks/AnimatedBonusExchangeSectionSteps';
import { Container, Content, Section } from './BonusExchangeSection.styled';

const BonusExchangeSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <SectionTitle text='Обмін балобонусів' />
          <Content>
            <AnimatedBonusExchangeSectionSteps />
            <AppLink />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default BonusExchangeSection;
