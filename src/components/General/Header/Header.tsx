import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import HeaderNavBar from '@GeneralComponents/HeaderNavBar';

const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderNavBar />
    </StyledHeader>
  );
};

export default Header;
