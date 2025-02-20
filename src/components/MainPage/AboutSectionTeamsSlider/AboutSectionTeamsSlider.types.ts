import { AboutTeams } from '@/types/aboutTeams.types';
import { SetActiveTeamFunc } from '@/types/functions.types';

export interface IProps {
  teams: AboutTeams;
  updateActiveTeam: SetActiveTeamFunc;
}
