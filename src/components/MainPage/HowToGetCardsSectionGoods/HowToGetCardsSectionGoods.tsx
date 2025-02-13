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
import { goods } from '@/constants';

const HowToGetCardsSectionGoods: FC<IProps> = ({ sideGap }) => {
  return (
    <Container>
      <TitleWrap>
        <Title>Товари партнерів</Title>
      </TitleWrap>
      <SliderContainer sideGap={sideGap}>
        <SliderBg></SliderBg>
        <SliderWrap>
          <HowToGetCardsSectionGoodsSlider
            goods={goods}
            gapMob={19}
            gapDesk={28}
            slideWidthMob={186}
            slideWidthDesk={271}
          />
        </SliderWrap>
      </SliderContainer>
      <LinkWContainer sideGap={sideGap}>
        <LinkWrap>
          <BuyOnlineLink />
        </LinkWrap>
      </LinkWContainer>
    </Container>
  );
};

export default HowToGetCardsSectionGoods;
