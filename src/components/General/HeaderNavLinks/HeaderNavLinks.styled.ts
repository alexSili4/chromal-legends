import styled from '@emotion/styled';

export const Nav = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li``;

export const NavLink = styled.a`
  display: block;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.proximaNova};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.19;
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: #052d44;
  }
`;
