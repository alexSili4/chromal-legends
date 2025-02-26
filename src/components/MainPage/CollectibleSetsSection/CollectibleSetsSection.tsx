import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import SectionSubtitle from '@MainPageComponents/SectionSubtitle';
import AnimatedCollectibleSetsList from '@AnimationBlocks/AnimatedCollectibleSetsList';
import { Links, SectionsIds } from '@/constants';
import BuyOnlineLink from '@MainPageComponents/BuyOnlineLink';
import {
  Container,
  Content,
  Section,
  TextWrap,
  Background,
} from './CollectibleSetsSection.styled';
import { collectibleSets } from '@/constants';

const CollectibleSetsSection: FC = () => {
  return (
    <Section id={SectionsIds.sets}>
      <Background>
        <GeneralContainer>
          <Container>
            <TextWrap>
              <SectionTitle text='Колекційні набори' />
              <SectionSubtitle
                text='Шукай легендарні картки в складі колекційних наборів Chroma
                Legends'
              />
            </TextWrap>
            <Content>
              <AnimatedCollectibleSetsList collectibleSets={collectibleSets} />
              <BuyOnlineLink href={Links.buyOnlineSets} />
            </Content>
          </Container>
        </GeneralContainer>
      </Background>
    </Section>
  );
};

export default CollectibleSetsSection;
