import { FC } from 'react';
import MenuChevronDownIcon from '@/icons/general/menu-chevron-down.svg?react';
import { IProps } from './HeaderMobileMenu.types';
import {
  Button,
  ButtonTitle,
  Container,
  ListWrap,
  List,
  ListItem,
  NavLink,
} from './HeaderMobileMenu.styled';
import { useAccordionElement } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';

const HeaderMobileMenu: FC<IProps> = ({ navLinks }) => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    toggleIsShowElement,
  } = useAccordionElement();

  const onMenuBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleIsShowElement();
  };

  return (
    <Container>
      <Button type='button' onClick={onMenuBtnClick} isShowList={isShowElement}>
        <ButtonTitle>меню</ButtonTitle>
        <MenuChevronDownIcon />
      </Button>
      <ListWrap
        ref={elementRef}
        isShowElement={isShowElement}
        elementScrollHeight={elementScrollHeight}
      >
        <List>
          {navLinks.map(({ path, title }, index) => (
            <ListItem key={index}>
              <NavLink href={path}>{title}</NavLink>
            </ListItem>
          ))}
        </List>
      </ListWrap>
    </Container>
  );
};

export default HeaderMobileMenu;
