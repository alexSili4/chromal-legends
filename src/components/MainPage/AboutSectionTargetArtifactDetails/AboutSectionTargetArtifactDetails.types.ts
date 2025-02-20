export interface IProps {
  img: string;
  imgLeftDesk: number;
  imgLeftMob: number;
  imgTopDesk: number;
  imgTopMob: number;
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
  name: string;
  desc: string;
  crownLeftDesk: number;
  crownLeftMob: number;
  crownTopDesk: number;
  crownTopMob: number;
}

export interface IStyledCrownWrapProps {
  leftDesk: number;
  leftMob: number;
  topDesk: number;
  topMob: number;
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
}
