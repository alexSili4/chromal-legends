import { FC } from 'react';
import { IProps } from './HeaderNavLinks.types';
import { List, ListItem, Nav, NavLink } from './HeaderNavLinks.styled';
import rules from '@/documents/rules.pdf';
import { makeBlur } from '@/utils';
import { AnchorClickEvent } from '@/types/types';

const HeaderNavLinks: FC<IProps> = ({ navLinks }) => {
  const onNavLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Nav>
      <List>
        {navLinks.map(({ path, title }, index) => {
          const isRulesLink = title === 'Правила акції';

          return (
            <ListItem key={index}>
              <NavLink
                href={isRulesLink ? rules : path}
                target={isRulesLink ? '_blank' : '_self'}
                rel='noopener noreferrer'
                onClick={onNavLinkClick}
              >
                {title}
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Nav>
  );
};

export default HeaderNavLinks;
