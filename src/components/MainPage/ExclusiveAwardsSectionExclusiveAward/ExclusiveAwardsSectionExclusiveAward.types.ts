export interface IProps {
  partnerImg: string;
  partnerWidthMob: number;
  partnerWidthDesk: number;
  partnerHeightMob: number;
  partnerHeightDesk: number;
  partnerTopMob: number;
  partnerTopDesk: number;
  partnerRightMob: number;
  partnerRightDesk: number;
  name: string;
  desc: string;
  awardImg: string;
  awardWidthMob: number;
  awardWidthDesk: number;
  awardHeightMob: number;
  awardHeightDesk: number;
  awardTopMob: number;
  awardTopDesk: number;
  awardRightMob: number;
  awardRightDesk: number;
  conditions: string;
  conditionsMaxWidthMob: number;
  conditionsMaxWidthDesk: number;
}

export interface IStyledPartnerImgProps {
  widthMob: number;
  widthDesk: number;
  heightMob: number;
  heightDesk: number;
  topMob: number;
  topDesk: number;
  rightMob: number;
  rightDesk: number;
}

export interface IStyledAwardImgProps {
  widthMob: number;
  widthDesk: number;
  heightMob: number;
  heightDesk: number;
  topMob: number;
  topDesk: number;
  rightMob: number;
  rightDesk: number;
}

export interface IStyledConditionsProps {
  maxWidthMob: number;
  maxWidthDesk: number;
}
