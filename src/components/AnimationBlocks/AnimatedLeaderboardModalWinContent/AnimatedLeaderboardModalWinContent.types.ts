import { Tournaments } from '@/types/tournaments.types';
import { Func, OnDivClickFunc } from '@/types/types';

export interface IProps {
  hideModalWin: OnDivClickFunc;
  setModalWinState: Func;
  tournaments: Tournaments;
}
