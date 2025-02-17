import GeneralContainer from '@/components/General/GeneralContainer';
import { SectionsIds } from '@/constants';
import { FC } from 'react';
import { Section, Container } from './AboutSection.styled';
import GameLink from '@GeneralComponents/GameLink';
import AnimatedAboutSectionCategories from '@AnimationBlocks/AnimatedAboutSectionCategories';

const AboutSection: FC = () => {
  return (
    <Section id={SectionsIds.about}>
      <GeneralContainer>
        <Container>
          <AnimatedAboutSectionCategories />
          <GameLink />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AboutSection;
