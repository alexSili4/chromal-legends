import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledListItemProps } from './AnimatedLeaguePrizes.types';

const listGap = theme.spacing(26);

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(21)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    gap: ${listGap}px;
  }
`;

export const ListItem = styled(motion.li)<IStyledListItemProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc(
      ${({ leaguePrizes }) =>
        getFlexItemWidth({ listGap, listLength: leaguePrizes })}
    );
  }
`;
