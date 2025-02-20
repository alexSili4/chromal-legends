import { TeamOrNull } from './aboutTeams.types';
import { ArtifactOrNull } from './aboutArtifacts.types';

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

export type SetActiveArtifactFunc = (data: ArtifactOrNull) => void;

export interface IGetCategory {
  isAboutCategory: boolean;
  isTeamsCategory: boolean;
  isArtifactsCategory: boolean;
}

export interface IGetActiveArtifactProps {
  isArtifactsCategory: boolean;
  activeArtifact: ArtifactOrNull;
}

export interface IGetActiveArtifact {
  isActiveLegendaryArtifact: boolean;
  isActiveSpeedArtifact: boolean;
  isActiveHealthArtifact: boolean;
  isActiveControlArtifact: boolean;
}
