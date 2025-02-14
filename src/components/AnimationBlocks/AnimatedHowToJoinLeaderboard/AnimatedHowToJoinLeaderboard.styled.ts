import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  IStyledImageProps,
  IStyledItemProps,
} from './AnimatedHowToJoinLeaderboard.types';

export const Container = styled(motion.div)`
  position: relative;
  height: 1015px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 489px;
  }
`;

export const Item = styled(motion.div)<IStyledItemProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ leftDesk }) => leftDesk}px;
  }
`;

export const Image = styled.img<IStyledImageProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ hiddenOnMob }) => hiddenOnMob && 'none'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ hiddenOnDesk }) => hiddenOnDesk && 'none'};
  }
`;
