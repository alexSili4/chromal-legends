import styled from '@emotion/styled';

export const Container = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const ButtonTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.19;
  text-transform: uppercase;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const NavLink = styled.a`
  padding-top: ${({ theme }) => theme.spacing(2.5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.19;
  text-transform: uppercase;

  li:first-of-type > & {
    padding-top: 0px;
  }

  li:last-of-type > & {
    padding-bottom: 0px;
  }
`;
