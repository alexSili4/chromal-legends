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

export interface IAward {
  img: string;
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
  position: IPosition;
}

export interface IExclusiveAward {
  name: string;
  desc: string;
  partner: IPartner;
  award: IAward;
  conditions: { text: string; maxWidthMob: number; maxWidthDesk: number };
}

export type ExclusiveAwards = IExclusiveAward[];
