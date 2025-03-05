import { FC } from 'react';
import { Container, BackGround } from './HeaderNavBar.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HeaderMobileMenu from '@GeneralComponents/HeaderMobileMenu';
import { navLinks } from '@/constants';
import HeaderNavLinks from '@GeneralComponents/HeaderNavLinks';

const HeaderNavBar: FC = () => {
  return (
    <BackGround>
      <Container>
        <GeneralContainer>
          <HeaderMobileMenu navLinks={navLinks} />
          <HeaderNavLinks navLinks={navLinks} />
        </GeneralContainer>
      </Container>
    </BackGround>
  );
};

export default HeaderNavBar;
