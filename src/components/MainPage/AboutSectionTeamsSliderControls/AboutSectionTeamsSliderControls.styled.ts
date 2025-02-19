import styled from '@emotion/styled';
import { IStyledSliderBtnProps } from './AboutSectionTeamsSliderControls.types';

export const Container = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.sliderBtn};
  top: -11px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SliderBtn = styled.button<IStyledSliderBtnProps>`
  border: none;
  background-color: transparent;
  pointer-events: ${({ isHiddenBtn }) => (isHiddenBtn ? 'none' : 'all')};
  opacity: ${({ isHiddenBtn }) => (isHiddenBtn ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    width: 29px;
    height: 75px;
  }
`;
