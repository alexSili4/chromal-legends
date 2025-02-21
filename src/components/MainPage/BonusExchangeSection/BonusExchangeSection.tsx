import { FC } from 'react';
import { Section } from './BonusExchangeSection.styled';
import { SectionsIds } from '@/constants';
import AnimatedBonusExchangeSectionContent from '@AnimationBlocks/AnimatedBonusExchangeSectionContent';
import { useTopGap } from '@/hooks';

const BonusExchangeSection: FC = () => {
  const { sectionRef, topGap } = useTopGap();

  return (
    <Section id={SectionsIds.rules} ref={sectionRef} topGap={topGap}>
      <AnimatedBonusExchangeSectionContent />
    </Section>
  );
};

export default BonusExchangeSection;
