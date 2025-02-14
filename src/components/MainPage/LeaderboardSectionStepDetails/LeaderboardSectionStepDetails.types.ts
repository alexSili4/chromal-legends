export interface IProps {
  img: string;
  imgWidthMob: number;
  imgHeightMob: number;
  imgWidthDesk: number;
  imgHeightDesk: number;
  title: string;
  number: string;
  titleMaxWidthMob: number;
  titleMaxWidthDesk: number;
}

export interface IStyledImageProps {
  widthMob: number;
  heightMob: number;
  widthDesk: number;
  heightDesk: number;
}

export interface IStyledTitleWrapProps {
  maxWidthDesk: number;
  maxWidthMob: number;
}
