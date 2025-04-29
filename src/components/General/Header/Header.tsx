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
import mobBanner from '@/images/header/mob-banner.png';
import deskBanner from '@/images/header/desk-banner.png';
import Banner from '@GeneralComponents/Banner';
// import previewMob from '@/video/preview-mob.mp4';
// import previewDesk from '@/video/preview-desk.mp4';
// import { useIsDesk } from '@/hooks';

const Header: FC = () => {
  // const isDesk = useIsDesk();

  // const preview = isDesk ? previewDesk : previewMob;

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
        {/* <HeaderImg /> */}
        {/* <HeaderVideo video={preview} /> */}
        <HeaderNavBar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
