import { Characters } from '@/types/aboutTeams.types';

export interface IProps {
  characters: Characters;
  name: string;
  desc: string;
  crownLeftDesk: number;
  crownLeftMob: number;
}

export interface IStyledCrownWrapProps {
  leftDesk: number;
  leftMob: number;
}

export interface IStyledImageProps {
  leftDesk: number;
  leftMob: number;
  topDesk: number;
  topMob: number;
  heightDesk: number;
  heightMob: number;
  widthDesk: number;
  widthMob: number;
  isCurrent: boolean;
}
