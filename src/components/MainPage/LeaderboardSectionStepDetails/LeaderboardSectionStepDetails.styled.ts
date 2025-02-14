import styled from '@emotion/styled';
import {
  IStyledImageProps,
  IStyledTitleWrapProps,
} from './LeaderboardSectionStepDetails.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Image = styled.img<IStyledImageProps>`
  width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;
`;

export const TitleWrap = styled.div<IStyledTitleWrapProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  width: ${({ maxWidthMob }) => maxWidthMob}px;
`;

export const Number = styled.p`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
`;
