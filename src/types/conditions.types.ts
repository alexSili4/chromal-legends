export interface ISubtitle {
  text: string;
  fontSize: number;
}

export interface IPosition {
  leftMob: number;
  topMob: number;
  leftDesk: number;
  topDesk: number;
}

export interface ITitle {
  title: string;
  subtitle: ISubtitle;
  position: IPosition;
}

export interface IImg {
  url: string;
  widthMob: number;
  widthDesk: number;
  heightMob: number;
  heightDesk: number;
}

export interface IDesc {
  desc: string;
  widthMob: number;
  widthDesk: number;
}

export interface ICondition {
  title: ITitle;
  desc: IDesc;
  img: IImg;
}

export type Conditions = ICondition[];
