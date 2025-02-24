import { NumberOrNull } from './types';

export interface ILeaguePrize {
  rank: NumberOrNull;
  name: string;
  img: string;
  text: string;
}

export type LeaguePrizes = ILeaguePrize[];
