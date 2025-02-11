export interface IPosition {
  xMob: number;
  yMob: number;
  xDesk: number;
  yDesk: number;
}

export interface IPartner {
  img: string;
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
  position: IPosition;
}

export interface IPrizeData {
  img: string;
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
  position: IPosition;
}

export interface IPrize {
  name: string;
  desc: string;
  partner: IPartner;
  prize: IPrizeData;
  conditions: { text: string; maxWidthMob: number; maxWidthDesk: number };
}

export type Prizes = IPrize[];
