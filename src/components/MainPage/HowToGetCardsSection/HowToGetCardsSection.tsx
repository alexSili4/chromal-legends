import { FC } from 'react';
import AnimatedHowToGetCardsSectionContent from '@AnimationBlocks/AnimatedHowToGetCardsSectionContent';
import { Section } from './HowToGetCardsSection.styled';
import { SectionsIds } from '@/constants';
import { useTopGap } from '@/hooks';
import { IProps } from './HowToGetCardsSection.types';

const HowToGetCardsSection: FC<IProps> = ({ partnersGoods }) => {
  const { sectionRef, topGap } = useTopGap();

  return (
    <Section id={SectionsIds.cards} ref={sectionRef} topGap={topGap}>
      <AnimatedHowToGetCardsSectionContent partnersGoods={partnersGoods} />
    </Section>
  );
};

export default HowToGetCardsSection;
