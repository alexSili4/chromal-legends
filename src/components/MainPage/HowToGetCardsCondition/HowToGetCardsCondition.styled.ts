import styled from '@emotion/styled';
import {
  IStyledDescProps,
  IStyledImageProps,
} from './HowToGetCardsCondition.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const TitleWrap = styled.div<IStyledTitleWrapProps>`
  position: absolute;
`;

export const Text = styled.p``;

export const Title = styled.span``;

export const Subtitle = styled.span``;

export const Image = styled.img<IStyledImageProps>`
  width: ${({ imgWidthMob }) => imgWidthMob}px;
  height: ${({ imgHeightMob }) => imgHeightMob}px;
`;

export const Description = styled.p<IStyledDescProps>`
  width: 100%;
  max-width: ${({ descWidthMob }) => descWidthMob}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
  text-align: center;
`;
