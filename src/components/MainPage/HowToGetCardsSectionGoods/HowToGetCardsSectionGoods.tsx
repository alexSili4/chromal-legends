import { FC } from 'react';
import BuyOnlineLink from '@MainPageComponents/BuyOnlineLink';
import { IProps } from './HowToGetCardsSectionGoods.types';
import HowToGetCardsSectionGoodsSlider from '@MainPageComponents/HowToGetCardsSectionGoodsSlider';
import {
  Container,
  LinkWContainer,
  LinkWrap,
  Title,
  SliderWrap,
  TitleWrap,
  SliderContainer,
  SliderBg,
} from './HowToGetCardsSectionGoods.styled';

const HowToGetCardsSectionGoods: FC<IProps> = ({ sideGapMob }) => {
  return (
    <Container>
      <TitleWrap>
        <Title>Товари партнерів</Title>
      </TitleWrap>
      <SliderContainer sideGapMob={sideGapMob}>
        <SliderBg></SliderBg>
        <SliderWrap>
          <HowToGetCardsSectionGoodsSlider />
        </SliderWrap>
      </SliderContainer>
      <LinkWContainer sideGapMob={sideGapMob}>
        <LinkWrap>
          <BuyOnlineLink />
        </LinkWrap>
      </LinkWContainer>
    </Container>
  );
};

export default HowToGetCardsSectionGoods;
