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
import { Links } from '@/constants';

const HowToGetCardsSectionGoods: FC<IProps> = ({ sideGap, partnersGoods }) => {
  return (
    <Container>
      <TitleWrap>
        <Title>Товари партнерів</Title>
      </TitleWrap>
      <SliderContainer sideGap={sideGap}>
        <SliderBg></SliderBg>
        <SliderWrap>
          <HowToGetCardsSectionGoodsSlider
            partnersGoods={partnersGoods}
            gapMob={19}
            gapDesk={28}
            slideWidthMob={186}
            slideWidthDesk={271}
          />
        </SliderWrap>
      </SliderContainer>
      <LinkWContainer sideGap={sideGap}>
        <LinkWrap>
          <BuyOnlineLink href={Links.buyOnlineGoods} />
        </LinkWrap>
      </LinkWContainer>
    </Container>
  );
};

export default HowToGetCardsSectionGoods;
