import styled from '@emotion/styled';
import {
  IStyledImageProps,
  IStyledNameBtnProps,
} from './AboutSectionTargetArtifactInfo.types';

export const NameBtn = styled.button<IStyledNameBtnProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;
  padding: ${({ theme: { spacing } }) => `${spacing(2)}px ${spacing(3)}px`};
  border: none;
  border-radius: 8px;
  background-color: ${({ isCurrent }) => (isCurrent ? '#FFE601' : '#052d44')};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: #ffe601;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ leftDesk }) => leftDesk}px;
    padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(6)}px`};
    border-radius: 16px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-shadow: -1px -1px 0 #052d44, 1px -1px 0 #052d44, -1px 1px 0 #052d44,
    1px 1px 0 #052d44, 0px 3px 0 #052d44, -1px 3px 0 #052d44, 1px 3px 0 #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
    text-shadow: -2px -2px 0 #052d44, 2px -2px 0 #052d44, -2px 2px 0 #052d44,
      2px 2px 0 #052d44, 0px 4px 0 #052d44, -2px 4px 0 #052d44,
      2px 4px 0 #052d44;
  }
`;

export const Image = styled.img<IStyledImageProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;
  width: ${({ widthMob }) => widthMob}px;
  max-width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ leftDesk }) => leftDesk}px;
    width: ${({ widthDesk }) => widthDesk}px;
    max-width: ${({ widthDesk }) => widthDesk}px;
    height: ${({ heightDesk }) => heightDesk}px;
  }
`;
