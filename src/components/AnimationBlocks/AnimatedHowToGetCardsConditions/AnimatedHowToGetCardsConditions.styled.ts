import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(22)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;

export const ListItem = styled(motion.li)``;
