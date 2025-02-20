import styled from '@emotion/styled';
import sectionBgMob from '@/images/about/section-bg-mob.png';
import sectionBgDesk from '@/images/about/section-bg-desk.png';
import { IStyledSectionProps } from './AboutSection.types';

export const Section = styled.section<IStyledSectionProps>`
  position: sticky;
  top: ${({ topGap }) => topGap}px;
  left: 0px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  background-image: url(${sectionBgMob});
  background-position: left 0 bottom 0;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(3)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;
