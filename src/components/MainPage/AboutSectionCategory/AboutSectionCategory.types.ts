import { InputChangeFunc } from '@/types/types';

export interface IProps {
  category: string;
  onChange: InputChangeFunc;
  isActiveCategory: boolean;
  isAboutCategory: boolean;
  isTeamsCategory: boolean;
  isArtifactsCategory: boolean;
}
