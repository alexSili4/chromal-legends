import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 12px;
  background-color: #9d86bb;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-radius: 16px;
  }
`;

export const Content = styled.div`
  height: 46.86vh;
  padding-right: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 60.76vh;
    padding-right: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const ListContainer = styled.div`
  height: 46.86vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 14px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 40px;
    }
  }

  &::-webkit-scrollbar-track {
    margin-top: ${({ theme }) => theme.spacing(6)}px;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
    background-color: #004d79;
    border-radius: 2px;
    outline: 4px solid #052d44;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      margin-bottom: ${({ theme }) => theme.spacing(10)}px;
      border-radius: 8px;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8ff1a;
    border-radius: 2px;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      border-radius: 8px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 60.76vh;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const ListItem = styled.li``;
