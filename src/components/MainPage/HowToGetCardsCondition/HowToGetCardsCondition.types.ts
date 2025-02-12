export interface IProps {
  title: string;
  subtitle: string;
  titleLeftDesk: number;
  titleLeftMob: number;
  titleTopDesk: number;
  titleTopMob: number;
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
  titleLeftDesk: number;
  titleLeftMob: number;
  titleTopDesk: number;
  titleTopMob: number;
}

export interface IStyledImageProps {
  imgHeightDesk: number;
  imgHeightMob: number;
  imgWidthDesk: number;
  imgWidthMob: number;
}

export interface IStyledDescProps {
  descWidthMob: number;
  descWidthDesk: number;
}
