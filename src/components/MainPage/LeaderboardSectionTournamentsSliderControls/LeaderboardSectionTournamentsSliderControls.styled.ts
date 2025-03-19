import styled from '@emotion/styled';
import { IStyledSliderBtnProps } from './LeaderboardSectionTournamentsSliderControls.types';

export const Container = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.sliderBtn};
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(6)}px;
    padding-right: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const SliderBtn = styled.button<IStyledSliderBtnProps>`
  border: none;
  padding: 0;
  background-color: transparent;
  pointer-events: ${({ isHiddenBtn }) => (isHiddenBtn ? 'none' : 'all')};
  opacity: ${({ isHiddenBtn }) => (isHiddenBtn ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    width: 29px;
    height: 75px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 36px;
      height: 82px;
    }
  }
`;
