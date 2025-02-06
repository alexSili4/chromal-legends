import { FC } from 'react';
import MenuChevronDownIcon from '@/icons/general/menu-chevron-down.svg?react';
import { IProps } from './HeaderMobileMenu.types';
import {
  Button,
  ButtonTitle,
  Container,
  List,
  ListItem,
  NavLink,
} from './HeaderMobileMenu.styled';

const HeaderMobileMenu: FC<IProps> = ({ navLinks }) => {
  return (
    <Container>
      <Button>
        <ButtonTitle>меню</ButtonTitle>
        <MenuChevronDownIcon />
      </Button>
      <List>
        {navLinks.map(({ path, title }, index) => (
          <ListItem key={index}>
            <NavLink href={path}>{title}</NavLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default HeaderMobileMenu;
