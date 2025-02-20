import { AboutCategories } from '@/constants';
import { IGetCategory } from '@/types/functions.types';

const getCategory = (category: string): IGetCategory => {
  const isAboutCategory = category === AboutCategories.about;
  const isTeamsCategory = category === AboutCategories.teams;
  const isArtifactsCategory = category === AboutCategories.artifacts;

  return { isAboutCategory, isTeamsCategory, isArtifactsCategory };
};

export default getCategory;
