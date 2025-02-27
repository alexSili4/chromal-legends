import { AboutChromaLegendsImgs } from '@/types/aboutChromaLegendsImgs.types';
import {
  SetActiveTeamFunc,
  SetActiveArtifactFunc,
} from '@/types/functions.types';

export interface IProps {
  isArtifactsCategory: boolean;
  isAboutCategory: boolean;
  isTeamsCategory: boolean;
  activeCategory: string;
  images: AboutChromaLegendsImgs;
  updateActiveTeam: SetActiveTeamFunc;
  updateActiveArtifact: SetActiveArtifactFunc;
}
