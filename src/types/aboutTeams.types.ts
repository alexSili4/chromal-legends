import { FC } from 'react';

export type Team =
  | 'Корпорація Хроматек'
  | 'Клан Майстрів Кольору'
  | 'Бунтарі Фаунасферії'
  | 'інститут Хронографії'
  | 'ЛЕГЕНДАРНІ';

export interface IImageInfo {
  img: string;
  topMob: number;
  leftMob: number;
  topDesk: number;
  leftDesk: number;
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
}

export interface ICharacter {
  img: IImageInfo;
  name: {
    topMob: number;
    leftMob: number;
    topDesk: number;
    leftDesk: number;
    name: string;
  };
}

export type Characters = ICharacter[];

export interface ITeam {
  name: Team;
  desc: string;
  logo: FC;
  characters: Characters;
}

export interface IAboutTeam {
  name: string;
  team: ITeam;
  desc: string;
  img: IImageInfo;
  crownPosition: {
    leftMob: number;
    leftDesk: number;
  };
  paddingBottomMob: number;
}

export type AboutTeams = IAboutTeam[];

export type TeamOrNull = Team | null;
