import { FC } from 'react';
import GeneralContainer from '@/components/General/GeneralContainer';
import SectionTitle from '@MainPageComponents/SectionTitle';
import AppLink from '@GeneralComponents/AppLink';
import BonusExchangeSectionSteps from '@MainPageComponents/BonusExchangeSectionSteps';
import { Container, Content } from './BonusExchangeSectionContent.styled';

const BonusExchangeSectionContent: FC = () => {
  return (
    <GeneralContainer>
      <Container>
        <SectionTitle text='Обмін балобонусів' />
        <Content>
          <BonusExchangeSectionSteps />
          <AppLink />
        </Content>
      </Container>
    </GeneralContainer>
  );
};

export default BonusExchangeSectionContent;
