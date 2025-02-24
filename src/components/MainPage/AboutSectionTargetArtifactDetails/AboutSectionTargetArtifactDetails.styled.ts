import styled from '@emotion/styled';
import {
  IStyledCrownWrapProps,
  IStyledImageProps,
} from './AboutSectionTargetArtifactDetails.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 524px;
  }
`;

export const DescWrap = styled.div`
  flex-shrink: 0;
  width: 192px;
  padding: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 12px;
  background-color: #003c5e;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 190px;
    padding: ${({ theme }) => theme.spacing(8)}px;
    border-radius: 18px;
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const NameWrap = styled.div`
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    top: 6px;
    left: 2px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -102px;
    right: 0px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.13;
  white-space: break-spaces;
  text-shadow: -2px 0px 0 #052d44, -2px -2px 0 #052d44, 2px -2px 0 #052d44,
    -2px 2px 0 #052d44, 2px 2px 0 #052d44, 0px 4px 0 #052d44, -2px 4px 0 #052d44,
    2px 4px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 36px;
    text-shadow: -2px 0px 0 #052d44, -2px -2px 0 #052d44, 2px -2px 0 #052d44,
      -2px 2px 0 #052d44, 2px 2px 0 #052d44, 0px 7px 0 #052d44,
      -2px 7px 0 #052d44, 2px 7px 0 #052d44;
  }
`;

export const CrownWrap = styled.div<IStyledCrownWrapProps>`
  position: absolute;
  top: -10px;
  left: ${({ leftMob }) => leftMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -4px;
    left: ${({ leftDesk }) => leftDesk}px;
  }
`;

export const Crown = styled.img`
  width: 14px;
  max-width: 14px;
  height: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 22px;
    max-width: 22px;
    height: 13px;
  }
`;

export const Image = styled.img<IStyledImageProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;
  width: ${({ widthMob }) => widthMob}px;
  max-width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ leftDesk }) => leftDesk}px;
    width: ${({ widthDesk }) => widthDesk}px;
    max-width: ${({ widthDesk }) => widthDesk}px;
    height: ${({ heightDesk }) => heightDesk}px;
  }
`;
