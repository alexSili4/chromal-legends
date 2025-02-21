import styled from '@emotion/styled';
import sectionBgMob from '@/images/conditions/section-bg-mob.png';
import sectionBgDesk from '@/images/conditions/section-bg-desk.png';
import { IStyledSectionProps } from './HowToGetCardsSection.types';

export const Section = styled.section<IStyledSectionProps>`
  position: sticky;
  top: ${({ topGap }) => topGap}px;
  left: 0px;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(11)}px;
  background-image: linear-gradient(
      180deg,
      #ffe600 16%,
      rgba(242, 201, 1, 0) 100%
    ),
    url(${sectionBgMob});
  background-position: bottom 0 left 0;
  background-size: 100% 100%, 100% auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(17)}px;
    background-image: linear-gradient(
        180deg,
        #ffe600 16%,
        rgba(242, 201, 1, 0) 100%
      ),
      url(${sectionBgDesk});
    background-position: bottom 0 left 0, bottom 0 left 50%;
    background-size: 100% 100%, cover;
  }
`;
