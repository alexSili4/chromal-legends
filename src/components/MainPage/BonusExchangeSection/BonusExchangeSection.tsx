import { FC } from 'react';
import { Section } from './BonusExchangeSection.styled';
import { SectionsIds } from '@/constants';
import AnimatedBonusExchangeSectionContent from '@AnimationBlocks/AnimatedBonusExchangeSectionContent';

const BonusExchangeSection: FC = () => {
  return (
    <Section id={SectionsIds.rules}>
      <AnimatedBonusExchangeSectionContent />
    </Section>
  );
};

export default BonusExchangeSection;
