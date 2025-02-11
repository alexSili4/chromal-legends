import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div``;

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const ListItem = styled(motion.li)``;
