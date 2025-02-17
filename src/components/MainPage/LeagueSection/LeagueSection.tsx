import { SectionsIds } from '@/constants';
import { FC } from 'react';
import SectionSubtitle from '@MainPageComponents/SectionSubtitle';
import SectionTitle from '@MainPageComponents/SectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedLeaguePrizes from '@AnimationBlocks/AnimatedLeaguePrizes';
import {
  Section,
  Container,
  Content,
  TitleWrap,
  Desc,
} from './LeagueSection.styled';
import { leaguePrizes } from '@/constants';

const LeagueSection: FC = () => {
  return (
    <Section id={SectionsIds.league}>
      <GeneralContainer>
        <Container>
          <TitleWrap>
            <SectionTitle text='Суперліга Сільпо' />
            <SectionSubtitle
              text='Приймай участь у турнірі Chroma Legends та вигравай подарунки. Кожні два тижні — новий раунд турніру та нові подарунки'
              maxWidth={821}
            />
          </TitleWrap>
          <Content>
            <AnimatedLeaguePrizes leaguePrizes={leaguePrizes} />
            <Desc>*Шукай більше інформації в застосунку Сhroma Legends</Desc>
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default LeagueSection;
