import { FC, useRef } from 'react';
import {
  AnimatedContainer,
  AnimatedItem,
} from './AnimatedBonusExchangeSectionContent.styled';
import { useInView } from 'framer-motion';
import BonusExchangeSectionContent from '@MainPageComponents/BonusExchangeSectionContent';

const AnimatedBonusExchangeSectionContent: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-100px 0px -200px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 3,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const itemVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <AnimatedContainer
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <AnimatedItem variants={itemVariants}>
        <BonusExchangeSectionContent />
      </AnimatedItem>
    </AnimatedContainer>
  );
};

export default AnimatedBonusExchangeSectionContent;
