import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  IStyledImageProps,
  IStyledItemProps,
} from './AnimatedHowToJoinLeaderboard.types';

export const Container = styled(motion.div)``;

export const Item = styled(motion.div)<IStyledItemProps>``;

export const Image = styled.img<IStyledImageProps>``;
