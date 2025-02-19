import { TeamOrNull } from './aboutTeams';

export interface IGetFlexItemWidthProps {
  listLength: number;
  listGap: number;
}

export interface IGetTeamPlace {
  isFirstPlace: boolean;
  isSecondPlace: boolean;
  isThirdPlace: boolean;
}

export interface IGetActiveTeamProps {
  isTeamsCategory: boolean;
  activeTeam: TeamOrNull;
}

export interface IGetActiveTeam {
  isActiveChromatekTeam: boolean;
  isActiveColorMastersTeam: boolean;
  isActiveFaunasphereRebelsTeam: boolean;
  isActiveLegendaryTeam: boolean;
  isActiveChronographyInstituteTeam: boolean;
}

export type SetActiveTeamFunc = (data: TeamOrNull) => void;
