import { SetActiveTeamFunc } from '@/types/functions.types';

export interface IProps {
  isArtifactsCategory: boolean;
  isAboutCategory: boolean;
  isTeamsCategory: boolean;
  activeCategory: string;
  updateActiveTeam: SetActiveTeamFunc;
}
