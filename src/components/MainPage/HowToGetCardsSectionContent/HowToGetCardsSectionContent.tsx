import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedHowToGetCardsConditions from '@AnimationBlocks/AnimatedHowToGetCardsConditions';
import HowToGetCardsSectionGoods from '@MainPageComponents/HowToGetCardsSectionGoods';
import { conditions, theme } from '@/constants';
import { Container, Content } from './HowToGetCardsSectionContent.styled';

const HowToGetCardsSectionContent: FC = () => {
  return (
    <GeneralContainer>
      <Container>
        <SectionTitle text='Як отримати картки?' isDark />
        <Content>
          <AnimatedHowToGetCardsConditions conditions={conditions} />
          <HowToGetCardsSectionGoods sideGap={theme.spacing(2)} />
        </Content>
      </Container>
    </GeneralContainer>
  );
};

export default HowToGetCardsSectionContent;
