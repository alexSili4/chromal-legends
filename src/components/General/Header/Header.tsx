import { FC } from 'react';
import {
  Container,
  // Info,
  // Border,
  // GeneralInfo,
  // Content,
  StyledHeader,
} from './Header.styled';
// import HeaderTitle from '@GeneralComponents/HeaderTitle';
import HeaderNavBar from '@GeneralComponents/HeaderNavBar';
// import HeaderPartners from '@GeneralComponents/HeaderPartners';
// import HeaderVideo from '@GeneralComponents/HeaderVideo';
// import HeaderDecorativeBgImg from '@GeneralComponents/HeaderDecorativeBgImg';
// import HeaderImg from '@GeneralComponents/HeaderImg';
import mobBanner from '@/images/header/mob-banner.jpg';
import deskBanner from '@/images/header/desk-banner.jpg';
import Banner from '@GeneralComponents/Banner';

const Header: FC = () => {
  return (
    <StyledHeader>
      {/* <HeaderDecorativeBgImg /> */}
      <Banner mobImg={mobBanner} deskImg={deskBanner} />
      <Container>
        {/* <Content>
          <Info>
            <Border></Border>
            <GeneralInfo>
              <HeaderPartners />
              <HeaderTitle />
            </GeneralInfo>
          </Info>
          <HeaderImg />
          <HeaderVideo />
        </Content> */}
        <HeaderNavBar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
