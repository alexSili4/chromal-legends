import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #052d44;
  padding-left: ${({ theme }) => theme.spacing(17)}px;
  padding-right: ${({ theme }) => theme.spacing(17)}px;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  flex-grow: 1;
`;
