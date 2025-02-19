import { AboutTeams } from '@/types/aboutTeams';
import { SetActiveTeamFunc } from '@/types/functions.types';

export interface IProps {
  teams: AboutTeams;
  updateActiveTeam: SetActiveTeamFunc;
}
