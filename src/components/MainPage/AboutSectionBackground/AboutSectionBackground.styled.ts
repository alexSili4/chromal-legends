import styled from '@emotion/styled';
import { IStyledTeamBgProps } from './AboutSectionBackground.types';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const TeamBg = styled.div<IStyledTeamBgProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ bgImgMob }) => bgImgMob});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${({ isCurrentBg }) => (isCurrentBg ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: ${({ bgImgDesk }) => bgImgDesk};
  }
`;
