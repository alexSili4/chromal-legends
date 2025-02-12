import { FC, useRef } from 'react';
import {
  Container,
  Description,
  DescriptionTextNumber,
  DescriptionTextPart,
  DescriptionTextWrap,
  DescriptionWrap,
  FirstStepWrap,
  SecondStepWrap,
  Text,
  Title,
  FirstStepContentWrap,
  Image,
  HeroLeftImg,
  HeroCenterImg,
  HeroRightImg,
} from './AnimatedBonusExchangeSectionSteps.styled';
import VlasnyiRakhunok from '@/icons/bonus-exchange/vlasnyi-rakhunok.svg?react';
import gemPack from '@/images/bonus-exchange/gem-pack.png';
import heroLeft from '@/images/bonus-exchange/hero-left.png';
import heroCenter from '@/images/bonus-exchange/hero-center.png';
import heroRight from '@/images/bonus-exchange/hero-right.png';
import { useInView } from 'framer-motion';

const AnimatedBonusExchangeSectionSteps: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-100px 0px -200px 0px',
  });
  const animate = inView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { y: 50, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <FirstStepWrap variants={elementVariants}>
        <Title>
          Перетворіть балобонуси
          <br />
          на магічні Кристали
        </Title>
        <FirstStepContentWrap>
          <DescriptionWrap>
            <DescriptionTextWrap>
              <DescriptionTextNumber>10</DescriptionTextNumber>
              <VlasnyiRakhunok />
            </DescriptionTextWrap>
            <Text>=</Text>
            <DescriptionTextWrap>
              <DescriptionTextNumber>
                100
                <br />
                <DescriptionTextPart>Кристалів</DescriptionTextPart>
              </DescriptionTextNumber>
              <Image src={gemPack} alt='Декоративне зображення кристалів' />
            </DescriptionTextWrap>
          </DescriptionWrap>
          <Description>
            Більше балобонусів до обміну = більше Кристалів
            <br />у грі «Chroma Legends»
          </Description>
        </FirstStepContentWrap>
      </FirstStepWrap>
      <SecondStepWrap variants={elementVariants}>
        <Title>
          Використовуйте кристали, щоб отримати унікальні костюми в грі «Chroma
          Legends»
        </Title>
        <HeroLeftImg src={heroLeft} alt='Зображення героя гри' />
        <HeroCenterImg src={heroCenter} alt='Зображення героя гри' />
        <HeroRightImg src={heroRight} alt='Зображення героя гри' />
      </SecondStepWrap>
    </Container>
  );
};

export default AnimatedBonusExchangeSectionSteps;
