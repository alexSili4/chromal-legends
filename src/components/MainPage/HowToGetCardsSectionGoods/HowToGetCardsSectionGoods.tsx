import { FC } from 'react';
import BuyOnlineLink from '@MainPageComponents/BuyOnlineLink';
import { IProps } from './HowToGetCardsSectionGoods.types';
import HowToGetCardsSectionGoodsSlider from '@MainPageComponents/HowToGetCardsSectionGoodsSlider';
import {
  Container,
  LinkWContainer,
  LinkWrap,
  Title,
} from './HowToGetCardsSectionGoods.styled';

const HowToGetCardsSectionGoods: FC<IProps> = ({ sideGapMob }) => {
  return (
    <Container>
      <Title>Товари партнерів</Title>
      <HowToGetCardsSectionGoodsSlider />
      <LinkWContainer sideGapMob={sideGapMob}>
        <LinkWrap>
          <BuyOnlineLink />
        </LinkWrap>
      </LinkWContainer>
    </Container>
  );
};

export default HowToGetCardsSectionGoods;
