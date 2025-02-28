import { NumberOrNull } from './types';

export interface IPrize {
  img: string;
  text?: string;
}

export interface ILeaguePrize {
  rank: NumberOrNull;
  name: string;
  img: string;
  prize: IPrize;
}

export type LeaguePrizes = ILeaguePrize[];
