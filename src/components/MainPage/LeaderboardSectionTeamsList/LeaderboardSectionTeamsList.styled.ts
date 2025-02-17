import styled from '@emotion/styled';
import {
  IStyledContentProps,
  IStyledListWrapProps,
} from './LeaderboardSectionTeamsList.types';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  border-radius: 12px;
  background-color: #9d86bb;
`;

export const Content = styled.div<IStyledContentProps>`
  flex-grow: 1;
  height: ${({ height }) => height}px;
  padding-left: ${({ theme }) => theme.spacing(2)}px;
  padding-right: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListContainer = styled.div<IStyledListWrapProps>`
  height: ${({ height }) => height}px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    margin-top: ${({ theme }) => theme.spacing(6)}px;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
    background-color: #004d79;
    border-radius: 2px;
    outline: 4px solid #052d44;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8ff1a;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
