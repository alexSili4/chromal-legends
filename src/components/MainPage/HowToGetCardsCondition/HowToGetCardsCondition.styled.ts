import styled from '@emotion/styled';
import {
  IStyledDescProps,
  IStyledImageProps,
  IStyledTitleWrapProps,
  IStyledSubtitleProps,
} from './HowToGetCardsCondition.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const TitleWrap = styled.div<IStyledTitleWrapProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;
`;

export const Text = styled.p``;

export const Title = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 64px;
  font-weight: 400;
  line-height: 1;
`;

export const Subtitle = styled.span<IStyledSubtitleProps>`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 400;
  line-height: 1;
`;

export const Image = styled.img<IStyledImageProps>`
  width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;
`;

export const Description = styled.p<IStyledDescProps>`
  width: 100%;
  max-width: ${({ widthMob }) => widthMob}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
  text-align: center;
`;
