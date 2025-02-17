import { Teams } from '@/types/teams.types';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  teams: Teams;
}

export interface IStyledContentProps {
  height: NumberOrNull;
}

export interface IStyledListWrapProps {
  height: NumberOrNull;
}
