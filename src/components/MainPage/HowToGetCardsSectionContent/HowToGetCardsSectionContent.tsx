import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HowToGetCardsSectionConditions from '@MainPageComponents/HowToGetCardsSectionConditions';
import HowToGetCardsSectionGoods from '@MainPageComponents/HowToGetCardsSectionGoods';
import { conditions, theme } from '@/constants';
import { Container, Content } from './HowToGetCardsSectionContent.styled';
import { IProps } from './HowToGetCardsSectionContent.types';

const HowToGetCardsSectionContent: FC<IProps> = ({ partnersGoods }) => {
  return (
    <GeneralContainer>
      <Container>
        <SectionTitle text='Як отримати картки?' isDark />
        <Content>
          <HowToGetCardsSectionConditions conditions={conditions} />
          <HowToGetCardsSectionGoods
            sideGap={theme.spacing(2)}
            partnersGoods={partnersGoods}
          />
        </Content>
      </Container>
    </GeneralContainer>
  );
};

export default HowToGetCardsSectionContent;
