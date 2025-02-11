import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import AppLink from '@GeneralComponents/AppLink';
import { Container, Content, Section } from './ExclusiveAwardsSection.styled';
import { exclusiveAwards } from '@/constants';
import AnimatedExclusiveAwardsList from '@AnimationBlocks/AnimatedExclusiveAwardsList';

const ExclusiveAwardsSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <SectionTitle text='Ексклюзивні нагороди для користувачів застосунку Сільпо' />
          <Content>
            <AnimatedExclusiveAwardsList exclusiveAwards={exclusiveAwards} />
            <AppLink />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default ExclusiveAwardsSection;
