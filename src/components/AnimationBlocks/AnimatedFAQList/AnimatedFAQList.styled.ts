import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledListProps } from './AnimatedFAQList.types';

export const List = styled(motion.ul)<IStyledListProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ listGap }) => listGap}px;
`;

export const ListItem = styled(motion.li)``;
