import { Func } from '@/types/types';
import { Clans } from '@/types/teams.types';

export interface IProps {
  showModalWin: boolean;
  setModalWinState: Func;
  clans: Clans;
}
