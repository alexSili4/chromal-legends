import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import {
  IStyledPlayBtnProps,
  IStyledVideoWrapProps,
} from './HeaderVideo.types';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const VideoWrap = styled.div<IStyledVideoWrapProps>`
  display: flex;
  transform: scale(${({ scale }) => scale});
  opacity: ${({ playing }) => (playing ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  pointer-events: none;
`;

export const PlayBtn = styled.button<IStyledPlayBtnProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  border: none;
  opacity: ${({ playing }) => (playing ? 0 : 1)};
  transform: translateX(-50%) translateY(-50%);
  pointer-events: ${({ playing }) => (playing ? 'none' : 'all')};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const PauseBtn = styled.button<IStyledPlayBtnProps>`
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: transparent;
  border: none;
  opacity: ${({ playing }) => (playing ? 1 : 0)};
  pointer-events: ${({ playing }) => (playing ? 'all' : 'none')};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const MutedBtn = styled.button<IStyledPlayBtnProps>`
  position: absolute;
  bottom: 100px;
  right: 30px;
  display: flex;
  background-color: transparent;
  border: none;
  opacity: ${({ playing }) => (playing ? 1 : 0)};
  pointer-events: ${({ playing }) => (playing ? 'all' : 'none')};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    width: 50px;
    height: 50px;
  }
`;
