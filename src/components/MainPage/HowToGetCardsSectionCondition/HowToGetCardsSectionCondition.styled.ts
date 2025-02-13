import styled from '@emotion/styled';
import {
  IStyledDescProps,
  IStyledImageProps,
  IStyledTitleWrapProps,
  IStyledSubtitleProps,
} from './HowToGetCardsSectionCondition.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    justify-content: space-between;
    height: 100%;

    li:first-of-type > & {
      align-items: flex-start;
    }

    li:last-of-type > & {
      align-items: flex-end;
    }
  }
`;

export const TitleWrap = styled.div<IStyledTitleWrapProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ leftDesk }) => leftDesk}px;
  }
`;

export const Text = styled.p``;

export const Title = styled.span`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 64px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 96px;
    line-height: 0.5;
  }
`;

export const Subtitle = styled.span<IStyledSubtitleProps>`
  color: #052d44;
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: ${({ fontSizeMob }) => fontSizeMob}px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: ${({ fontSizeDesk }) => fontSizeDesk}px;
  }
`;

export const Image = styled.img<IStyledImageProps>`
  width: ${({ widthMob }) => widthMob}px;
  height: ${({ heightMob }) => heightMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ widthDesk }) => widthDesk}px;
    height: ${({ heightDesk }) => heightDesk}px;
  }
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: ${({ widthDesk }) => widthDesk}px;
    font-size: 24px;
  }
`;
