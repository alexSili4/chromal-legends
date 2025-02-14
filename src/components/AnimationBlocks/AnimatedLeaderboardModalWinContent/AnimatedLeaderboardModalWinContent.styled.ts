import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const BackdropWrap = styled(motion.div)`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.animatedModalWin};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(17)}px;
  padding-bottom: ${({ theme }) => theme.spacing(7)}px;
  background-color: rgba(5, 45, 68, 0.25);
`;

export const Container = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
