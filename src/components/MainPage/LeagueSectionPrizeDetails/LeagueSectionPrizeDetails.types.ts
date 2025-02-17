import { NumberOrNull } from '@/types/types';

export interface IProps {
  name: string;
  rank: NumberOrNull;
  text: string;
}

export interface IStyledContainerProps {
  isPrizeInfo: boolean;
}

export interface IStyledNameProps {
  isPrizeInfo: boolean;
}
