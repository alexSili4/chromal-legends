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
import { AnchorClickEvent, BtnClickEvent } from '@/types/types';
import rules from '@/documents/rules.pdf';

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

  const onNavLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);
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
          {navLinks.map(({ path, title }, index) => {
            const isRulesLink = title === 'Правила акції';

            return (
              <ListItem key={index}>
                <NavLink
                  href={isRulesLink ? rules : path}
                  target={isRulesLink ? '_blank' : '_self'}
                  rel='noopener noreferrer nofollow'
                  onClick={onNavLinkClick}
                >
                  {title}
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </ListWrap>
    </Container>
  );
};

export default HeaderMobileMenu;
