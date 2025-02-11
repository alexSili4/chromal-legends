import styled from '@emotion/styled';
import {
  IStyledAwardImgProps,
  IStyledConditionsProps,
  IStyledPartnerImgProps,
} from './PrizesSectionPrizeDetails.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 187px;
  height: 178px;
  border-radius: 23px;
  background-color: rgba(5, 45, 68, 0.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 100%;
    height: 231px;
  }
`;

export const PartnerImg = styled.img<IStyledPartnerImgProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ rightMob }) => rightMob}px;
  width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ rightDesk }) => rightDesk}px;
    width: ${({ widthDesk }) => widthDesk}px;
    height: ${({ heightDesk }) => heightDesk}px;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  bottom: 14px;
  left: -14px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: 16px;
    left: -18px;
  }
`;

export const Name = styled.p`
  max-width: 96px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  text-shadow: -2px -2px 0 #052d44, 2px -2px 0 #052d44, -2px 2px 0 #052d44,
    2px 2px 0 #052d44, 0px 6px 0 #052d44, -2px 6px 0 #052d44, 2px 6px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 144px;
    font-size: 24px;
  }
`;

export const Desc = styled.p`
  max-width: 165px;
  color: #ffc90b;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-shadow: -2px -2px 0 #052d44, 2px -2px 0 #052d44, -2px 2px 0 #052d44,
    2px 2px 0 #052d44, 0px 4px 0 #052d44, -2px 4px 0 #052d44, 2px 4px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 236px;
    font-size: 20px;
  }
`;

export const AwardImg = styled.img<IStyledAwardImgProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  right: ${({ rightMob }) => rightMob}px;
  width: ${({ widthMob }) => widthMob}px;
  max-width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    right: ${({ rightDesk }) => rightDesk}px;
    width: ${({ widthDesk }) => widthDesk}px;
    max-width: ${({ widthDesk }) => widthDesk}px;
    height: ${({ heightDesk }) => heightDesk}px;
  }
`;

export const Conditions = styled.p<IStyledConditionsProps>`
  max-width: ${({ maxWidthMob }) => maxWidthMob}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.21;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: absolute;
    top: 100%;
    left: 50%;
    width: ${({ maxWidthDesk }) => maxWidthDesk}px;
    max-width: ${({ maxWidthDesk }) => maxWidthDesk}px;
    font-size: 20px;
    line-height: 1.2;
    transform: translateX(-50%) translateY(10px);
  }
`;
