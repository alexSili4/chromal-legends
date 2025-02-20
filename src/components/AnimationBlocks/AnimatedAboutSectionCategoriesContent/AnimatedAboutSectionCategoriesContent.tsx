import { FC } from 'react';
import AboutSectionTeamsSlider from '@MainPageComponents/AboutSectionTeamsSlider';
import { aboutTeams, aboutArtifacts } from '@/constants';
import { Container } from './AnimatedAboutSectionCategoriesContent.styled';
import { AnimatePresence } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionCategoriesContent.types';
import AnimatedAboutChromaLegends from '@AnimationBlocks/AnimatedAboutChromaLegends';
import AboutSectionArtifactsSlider from '@MainPageComponents/AboutSectionArtifactsSlider';

const AnimatedAboutSectionCategoriesContent: FC<IProps> = ({
  isArtifactsCategory,
  isAboutCategory,
  isTeamsCategory,
  activeCategory,
  updateActiveTeam,
  updateActiveArtifact,
}) => {
  return (
    <AnimatePresence mode='wait'>
      <Container
        key={activeCategory}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {isAboutCategory && <AnimatedAboutChromaLegends />}
        {isTeamsCategory && (
          <AboutSectionTeamsSlider
            teams={aboutTeams}
            updateActiveTeam={updateActiveTeam}
          />
        )}
        {isArtifactsCategory && (
          <AboutSectionArtifactsSlider
            artifacts={aboutArtifacts}
            updateActiveArtifact={updateActiveArtifact}
          />
        )}
      </Container>
    </AnimatePresence>
  );
};

export default AnimatedAboutSectionCategoriesContent;
