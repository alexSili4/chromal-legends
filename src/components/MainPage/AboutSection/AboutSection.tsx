import GeneralContainer from '@/components/General/GeneralContainer';
import { AboutCategories, SectionsIds } from '@/constants';
import { FC, useState } from 'react';
import { Section, Container, Content } from './AboutSection.styled';
import GameLink from '@GeneralComponents/GameLink';
import AboutSectionCategories from '@MainPageComponents/AboutSectionCategories';
import { InputChangeEvent } from '@/types/types';
import AnimatedAboutSectionCategoriesContent from '@AnimationBlocks/AnimatedAboutSectionCategoriesContent';
import AboutSectionBackground from '@MainPageComponents/AboutSectionBackground';
import { TeamOrNull } from '@/types/aboutTeams.types';
import { getCategory, getActiveTeam, getActiveArtifact } from '@/utils';
import { ArtifactOrNull } from '@/types/aboutArtifacts.types';
import { useTopGap } from '@/hooks';

const AboutSection: FC = () => {
  const [activeArtifact, setActiveArtifact] = useState<ArtifactOrNull>(null);
  const [activeTeam, setActiveTeam] = useState<TeamOrNull>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    () => AboutCategories.about
  );
  const { sectionRef, topGap } = useTopGap();

  const { isAboutCategory, isArtifactsCategory, isTeamsCategory } =
    getCategory(activeCategory);

  const {
    isActiveChromatekTeam,
    isActiveChronographyInstituteTeam,
    isActiveColorMastersTeam,
    isActiveFaunasphereRebelsTeam,
    isActiveLegendaryTeam,
  } = getActiveTeam({ activeTeam, isTeamsCategory });
  const {
    isActiveControlArtifact,
    isActiveHealthArtifact,
    isActiveLegendaryArtifact,
    isActiveSpeedArtifact,
  } = getActiveArtifact({ activeArtifact, isArtifactsCategory });

  const updateActiveTeam = (data: TeamOrNull) => {
    setActiveTeam(data);
  };

  const updateActiveArtifact = (data: ArtifactOrNull) => {
    setActiveArtifact(data);
  };

  const onCategoryChange = (e: InputChangeEvent) => {
    setActiveCategory(e.currentTarget.value);
  };

  const categories = Object.values(AboutCategories);

  return (
    <Section id={SectionsIds.about} ref={sectionRef} topGap={topGap}>
      <AboutSectionBackground
        isActiveChromatekTeam={isActiveChromatekTeam}
        isActiveChronographyInstituteTeam={isActiveChronographyInstituteTeam}
        isActiveColorMastersTeam={isActiveColorMastersTeam}
        isActiveFaunasphereRebelsTeam={isActiveFaunasphereRebelsTeam}
        isActiveLegendaryTeam={isActiveLegendaryTeam}
        isActiveControlArtifact={isActiveControlArtifact}
        isActiveHealthArtifact={isActiveHealthArtifact}
        isActiveLegendaryArtifact={isActiveLegendaryArtifact}
        isActiveSpeedArtifact={isActiveSpeedArtifact}
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
              updateActiveArtifact={updateActiveArtifact}
            />
          </Content>
          <GameLink />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AboutSection;
