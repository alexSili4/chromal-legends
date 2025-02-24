import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  heightDesk: number;
  heightMob: number;
  img: string;
  imgLeftDesk: number;
  imgLeftMob: number;
  imgTopDesk: number;
  imgTopMob: number;
  widthDesk: number;
  widthMob: number;
  nameLeftDesk: number;
  nameLeftMob: number;
  nameTopDesk: number;
  nameTopMob: number;
  name: string;
  isCurrent: boolean;
  onClick: OnBtnClickFunc;
}

export interface IStyledNameBtnProps {
  leftDesk: number;
  leftMob: number;
  topDesk: number;
  topMob: number;
  isCurrent: boolean;
}

export interface IStyledImageProps {
  leftDesk: number;
  leftMob: number;
  topDesk: number;
  topMob: number;
  widthDesk: number;
  widthMob: number;
  heightDesk: number;
  heightMob: number;
}
