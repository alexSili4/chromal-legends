import { FC } from 'react';
import AnimatedHowToGetCardsSectionContent from '@AnimationBlocks/AnimatedHowToGetCardsSectionContent';
import { Section } from './HowToGetCardsSection.styled';
import { SectionsIds } from '@/constants';

const HowToGetCardsSection: FC = () => {
  return (
    <Section id={SectionsIds.cards}>
      <AnimatedHowToGetCardsSectionContent />
    </Section>
  );
};

export default HowToGetCardsSection;
