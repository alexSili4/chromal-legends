import styled from '@emotion/styled';
import { IStyledListWrapProps } from './LeaderboardSectionTeamsList.types';

export const Container = styled.div`
  flex-grow: 1;
  border-radius: 12px;
  background-color: #9d86bb;
`;

export const ListWrap = styled.div<IStyledListWrapProps>`
  height: ${({ height }) => height}px;
  overflow-y: scroll;
`;

export const List = styled.ul`
  height: 2000px;
`;
