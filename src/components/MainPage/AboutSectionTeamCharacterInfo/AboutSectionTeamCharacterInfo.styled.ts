import styled from '@emotion/styled';
import {
  IStyledImageProps,
  IStyledNameWrapProps,
} from './AboutSectionTeamCharacterInfo.types';

export const NameWrap = styled.div<IStyledNameWrapProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;
  padding: ${({ theme: { spacing } }) => `${spacing(2)}px ${spacing(3)}px`};
  border-radius: 8px;
  background-color: ${({ isCurrent }) => (isCurrent ? '#FFE601' : '#052d44')};
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-shadow: -1px -1px 0 #052d44, 1px -1px 0 #052d44, -1px 1px 0 #052d44,
    1px 1px 0 #052d44, 0px 3px 0 #052d44, -1px 3px 0 #052d44, 1px 3px 0 #052d44;
`;

export const Image = styled.img<IStyledImageProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;
  width: ${({ widthMob }) => widthMob}px;
  max-width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;
`;
