import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledListItemProps } from './AnimatedCollectibleSetsList.types';

const listGapDesk = theme.spacing(25);

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(5)}px;
    padding-right: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
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
