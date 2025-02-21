import { Characters, Team } from '@/types/aboutTeams.types';
import { FC } from 'react';

export interface IProps {
  characters: Characters;
  teamDesc: string;
  logo: FC;
  teamName: Team;
  heightMob: number;
  heightDesk: number;
  crownLeftMob: number;
  crownLeftDesk: number;
  characterDesc: string;
  imgLeftDesk: number;
  imgLeftMob: number;
  img: string;
  imgTopDesk: number;
  imgTopMob: number;
  characterName: string;
  widthDesk: number;
  widthMob: number;
  paddingBottomMob: number;
}

export interface IStyledContainerProps {
  paddingBottomMob: number;
}
