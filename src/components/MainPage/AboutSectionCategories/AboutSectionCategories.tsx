import { FC } from 'react';
import { IProps } from './AboutSectionCategories.types';
import { List, ListItem, Container } from './AboutSectionCategories.styled';
import AboutSectionCategory from '@MainPageComponents/AboutSectionCategory';
import { AboutCategories } from '@/constants';

const AboutSectionCategories: FC<IProps> = ({
  categories,
  activeCategory,
  onChange,
}) => {
  return (
    <Container>
      <List>
        {categories.map((category, index) => {
          const isActiveCategory = category === activeCategory;
          const isAboutCategory = category === AboutCategories.about;
          const isTeamsCategory = category === AboutCategories.teams;
          const isArtifactsCategory = category === AboutCategories.artifacts;

          return (
            <ListItem key={index}>
              <AboutSectionCategory
                category={category}
                isAboutCategory={isAboutCategory}
                isActiveCategory={isActiveCategory}
                isArtifactsCategory={isArtifactsCategory}
                isTeamsCategory={isTeamsCategory}
                onChange={onChange}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default AboutSectionCategories;
