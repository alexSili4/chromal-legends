import GeneralContainer from '@/components/General/GeneralContainer';
import { AboutCategories, SectionsIds } from '@/constants';
import { FC, useState } from 'react';
import { Section, Container, Content } from './AboutSection.styled';
import GameLink from '@GeneralComponents/GameLink';
import AboutSectionCategories from '@MainPageComponents/AboutSectionCategories';
import { InputChangeEvent } from '@/types/types';
import AnimatedAboutSectionCategoriesContent from '@AnimationBlocks/AnimatedAboutSectionCategoriesContent';
import AboutSectionBackground from '@MainPageComponents/AboutSectionBackground';
import { TeamOrNull } from '@/types/aboutTeams';
import { getActiveTeam } from '@/utils';

const AboutSection: FC = () => {
  const [activeTeam, setActiveTeam] = useState<TeamOrNull>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    () => AboutCategories.about
  );

  const isAboutCategory = activeCategory === AboutCategories.about;
  const isTeamsCategory = activeCategory === AboutCategories.teams;
  const isArtifactsCategory = activeCategory === AboutCategories.artifacts;

  const {
    isActiveChromatekTeam,
    isActiveChronographyInstituteTeam,
    isActiveColorMastersTeam,
    isActiveFaunasphereRebelsTeam,
    isActiveLegendaryTeam,
  } = getActiveTeam({ activeTeam, isTeamsCategory });

  const updateActiveTeam = (data: TeamOrNull) => {
    setActiveTeam(data);
  };

  const onCategoryChange = (e: InputChangeEvent) => {
    setActiveCategory(e.currentTarget.value);
  };

  const categories = Object.values(AboutCategories);

  return (
    <Section id={SectionsIds.about}>
      <AboutSectionBackground
        isActiveChromatekTeam={isActiveChromatekTeam}
        isActiveChronographyInstituteTeam={isActiveChronographyInstituteTeam}
        isActiveColorMastersTeam={isActiveColorMastersTeam}
        isActiveFaunasphereRebelsTeam={isActiveFaunasphereRebelsTeam}
        isActiveLegendaryTeam={isActiveLegendaryTeam}
      />
      <GeneralContainer isPositionRelative>
        <Container>
          <Content>
            <AboutSectionCategories
              onChange={onCategoryChange}
              activeCategory={activeCategory}
              categories={categories}
            />
            <AnimatedAboutSectionCategoriesContent
              isTeamsCategory={isTeamsCategory}
              isAboutCategory={isAboutCategory}
              isArtifactsCategory={isArtifactsCategory}
              activeCategory={activeCategory}
              updateActiveTeam={updateActiveTeam}
            />
          </Content>
          <GameLink />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AboutSection;
