export interface IProps {
  title: string;
  subtitle: string;
  titleLeftDesk: number;
  titleLeftMob: number;
  titleTopDesk: number;
  titleTopMob: number;
  subtitleFontSizeMob: number;
  subtitleFontSizeDesk: number;
  desc: string;
  descWidthMob: number;
  descWidthDesk: number;
  img: string;
  imgHeightDesk: number;
  imgHeightMob: number;
  imgWidthDesk: number;
  imgWidthMob: number;
}

export interface IStyledTitleWrapProps {
  leftDesk: number;
  leftMob: number;
  topDesk: number;
  topMob: number;
}

export interface IStyledImageProps {
  heightDesk: number;
  heightMob: number;
  widthDesk: number;
  widthMob: number;
}

export interface IStyledDescProps {
  widthMob: number;
  widthDesk: number;
}

export interface IStyledSubtitleProps {
  fontSizeMob: number;
  fontSizeDesk: number;
}
