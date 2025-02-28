import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const BackdropWrap = styled(motion.div)`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.animatedModalWin};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(14)}px;
  padding-bottom: ${({ theme }) => theme.spacing(14)}px;
  background: rgba(5, 45, 68, 0.25);
`;

export const Container = styled(motion.div)`
  position: relative;
  width: 100vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 830px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  & > svg {
    width: 26px;
    height: 26px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 56px;
      height: 56px;
    }
  }
`;
