import GeneralContainer from '@/components/General/GeneralContainer';
import { AboutCategories, SectionsIds } from '@/constants';
import { FC, useState } from 'react';
import { Section, Container } from './AboutSection.styled';
import GameLink from '@GeneralComponents/GameLink';
import AnimatedAboutSectionCategories from '@AnimationBlocks/AnimatedAboutSectionCategories';

const AboutSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState<AboutCategories>(
    () => AboutCategories.about
  );

  const categories = Object.values(AboutCategories);

  return (
    <Section id={SectionsIds.about}>
      <GeneralContainer>
        <Container>
          <AnimatedAboutSectionCategories categories={categories} />
          <GameLink />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AboutSection;
