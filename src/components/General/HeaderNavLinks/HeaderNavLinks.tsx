import { FC } from 'react';
import { IProps } from './HeaderNavLinks.types';
import { List, ListItem, Nav, NavLink } from './HeaderNavLinks.styled';

const HeaderNavLinks: FC<IProps> = ({ navLinks }) => {
  return (
    <Nav>
      <List>
        {navLinks.map(({ path, title }, index) => (
          <ListItem key={index}>
            <NavLink href={path}>{title}</NavLink>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

export default HeaderNavLinks;
