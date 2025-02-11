import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledListItemProps } from './AnimatedExclusiveAwardsList.types';
import { getFlexItemWidth } from '@/utils';
import { theme } from '@/constants';

const listGapDesk = theme.spacing(20);

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(5)}px;
    padding-right: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(16)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    align-items: flex-start;
    gap: ${listGapDesk}px;
  }
`;

export const ListItem = styled(motion.li)<IStyledListItemProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc(
      ${({ listLength }) =>
        getFlexItemWidth({ listGap: listGapDesk, listLength })}
    );
  }
`;
