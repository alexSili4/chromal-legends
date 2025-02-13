import styled from '@emotion/styled';
import {
  IStyledLinkWContainerProps,
  IStyledSliderContainerProps,
} from './HowToGetCardsSectionGoods.types';
import linkBgMob from '@/images/conditions/link-bg-mob.png';
export const Container = styled.div`
  background-color: #052d44;
  border-radius: 24px;
  overflow: hidden;
`;

export const TitleWrap = styled.div`
  padding-top: ${({ theme }) => theme.spacing(7)}px;
  padding-bottom: ${({ theme }) => theme.spacing(7)}px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuyRUSBELUKR};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
`;

export const SliderContainer = styled.div<IStyledSliderContainerProps>`
  position: relative;
  padding-left: ${({ sideGapMob }) => sideGapMob}px;
  padding-right: ${({ sideGapMob }) => sideGapMob}px;
`;

export const SliderBg = styled.div`
  height: 265px;
  border-radius: 16px 16px 0px 0px;
  background-color: #f6a20c;
`;

export const SliderWrap = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
`;

export const LinkWContainer = styled.div<IStyledLinkWContainerProps>`
  padding-left: ${({ sideGapMob }) => sideGapMob}px;
  padding-right: ${({ sideGapMob }) => sideGapMob}px;
  padding-bottom: ${({ sideGapMob }) => sideGapMob}px;
`;

export const LinkWrap = styled.div`
  background-color: #f6a20c;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
  background-image: linear-gradient(to bottom, #faf7f7, #faf7f7),
    url(${linkBgMob});
  background-position: top 58px left 0px, top 24px left 0px;
  background-size: 100% 100%, contain;
  background-repeat: no-repeat;
  border-radius: 0 0 16px 16px;
  overflow: hidden;
`;
