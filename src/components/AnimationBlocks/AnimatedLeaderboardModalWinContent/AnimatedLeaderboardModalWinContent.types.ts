import { Clans } from '@/types/teams.types';
import { Func, OnDivClickFunc } from '@/types/types';

export interface IProps {
  hideModalWin: OnDivClickFunc;
  setModalWinState: Func;
  clans: Clans;
}
