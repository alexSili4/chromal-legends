import { FC } from 'react';
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
} from './BonusExchangeSectionSteps.styled';
import VlasnyiRakhunok from '@/icons/bonus-exchange/vlasnyi-rakhunok.svg?react';
import gemPack from '@/images/bonus-exchange/gem-pack.png';
import heroLeft from '@/images/bonus-exchange/hero-left.png';
import heroCenter from '@/images/bonus-exchange/hero-center.png';
import heroRight from '@/images/bonus-exchange/hero-right.png';

const BonusExchangeSectionSteps: FC = () => {
  return (
    <Container>
      <FirstStepWrap>
        <Title>
          Перетвори балобонуси
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
            Більше балобонусів до обміну = більше кристалів
            <br />у грі «Chroma Legends»
          </Description>
        </FirstStepContentWrap>
      </FirstStepWrap>
      <SecondStepWrap>
        <Title>
          Використовуй кристали, щоб отримати унікальні костюми в грі «Chroma
          Legends»
        </Title>
        <HeroLeftImg src={heroLeft} alt='Зображення героя гри' />
        <HeroCenterImg src={heroCenter} alt='Зображення героя гри' />
        <HeroRightImg src={heroRight} alt='Зображення героя гри' />
      </SecondStepWrap>
    </Container>
  );
};

export default BonusExchangeSectionSteps;
