import styled from '@emotion/styled';
import { IStyledContentProps } from './LeaderboardSectionTeamsList.types';

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

export const ListWrap = styled.div`
  height: ${({ height }) => height}px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    margin-top: ${({ theme }) => theme.spacing(6)}px;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;

    background-color: pink;
    border-radius: 100px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9371f1;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  height: 2000px;
`;
