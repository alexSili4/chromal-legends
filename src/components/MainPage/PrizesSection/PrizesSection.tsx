import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import AppLink from '@GeneralComponents/AppLink';
import {
  Container,
  Content,
  Section,
  Background,
} from './PrizesSection.styled';
import { prizes, SectionsIds } from '@/constants';
import AnimatedPrizesList from '@AnimationBlocks/AnimatedPrizesList';

const PrizesSection: FC = () => {
  return (
    <Section id={SectionsIds.prizes}>
      <Background>
        <GeneralContainer>
          <Container>
            <SectionTitle text='Ексклюзивні нагороди для користувачів застосунку «Сільпо»' />
            <Content>
              <AnimatedPrizesList prizes={prizes} />
              <AppLink />
            </Content>
          </Container>
        </GeneralContainer>
      </Background>
    </Section>
  );
};

export default PrizesSection;
