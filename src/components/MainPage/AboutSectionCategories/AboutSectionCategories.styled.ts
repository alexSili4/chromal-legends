import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #052d44;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(17)}px;
    padding-right: ${({ theme }) => theme.spacing(17)}px;
  }
`;

export const List = styled.ul`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
  }
`;

export const ListItem = styled.li`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-grow: 1;
  }
`;
