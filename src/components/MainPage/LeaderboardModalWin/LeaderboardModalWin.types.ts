import { Func } from '@/types/types';
import { Tournaments } from '@/types/tournaments.types';

export interface IProps {
  showModalWin: boolean;
  setModalWinState: Func;
  tournaments: Tournaments;
}
