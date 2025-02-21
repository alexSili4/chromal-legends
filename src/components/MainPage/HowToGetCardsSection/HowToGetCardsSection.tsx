import { FC } from 'react';
import AnimatedHowToGetCardsSectionContent from '@AnimationBlocks/AnimatedHowToGetCardsSectionContent';
import { Section } from './HowToGetCardsSection.styled';
import { SectionsIds } from '@/constants';
import { useTopGap } from '@/hooks';

const HowToGetCardsSection: FC = () => {
  const { sectionRef, topGap } = useTopGap();

  return (
    <Section id={SectionsIds.cards} ref={sectionRef} topGap={topGap}>
      <AnimatedHowToGetCardsSectionContent />
    </Section>
  );
};

export default HowToGetCardsSection;
