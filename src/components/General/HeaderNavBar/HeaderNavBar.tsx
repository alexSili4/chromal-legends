import { FC } from 'react';
import { Container } from './HeaderNavBar.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HeaderMobileMenu from '@GeneralComponents/HeaderMobileMenu';
import { navLinks } from '@/constants';

const HeaderNavBar: FC = () => {
  return (
    <Container>
      <GeneralContainer>
        <HeaderMobileMenu navLinks={navLinks} />
      </GeneralContainer>
    </Container>
  );
};

export default HeaderNavBar;
