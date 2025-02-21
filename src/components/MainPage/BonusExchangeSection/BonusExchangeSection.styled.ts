import styled from '@emotion/styled';
import sectionBgMob from '@/images/bonus-exchange/section-bg-mob.png';
import sectionBgDesk from '@/images/bonus-exchange/section-bg-desk.png';
import { IStyledSectionProps } from './BonusExchangeSection.types';

export const Section = styled.section<IStyledSectionProps>`
  position: sticky;
  top: ${({ topGap }) => topGap}px;
  left: 0px;
  background-color: #a38ac5;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  background-image: url(${sectionBgMob});
  background-size: 679px 233px;
  background-position: left calc(50% + 51px) bottom 0;
  background-repeat: no-repeat;

  @media (min-width: 570px) {
    background-size: contain;
    background-position: left 0 bottom 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBgDesk});
    padding-top: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  }
`;
