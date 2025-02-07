import { FC } from 'react';
import {
  Container,
  Info,
  Border,
  GeneralInfo,
  Content,
  StyledHeader,
} from './Header.styled';
import HeaderTitle from '@GeneralComponents/HeaderTitle';
import HeaderNavBar from '@GeneralComponents/HeaderNavBar';
import HeaderPartners from '@GeneralComponents/HeaderPartners';
import HeaderVideo from '@GeneralComponents/HeaderVideo';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HeaderDecorativeBgImg from '@GeneralComponents/HeaderDecorativeBgImg';

const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderDecorativeBgImg />
      <GeneralContainer isHiddenOnMobile isPositionRelative>
        <HeaderVideo />
      </GeneralContainer>
      <Container>
        <Info>
          <Border></Border>
          <GeneralInfo>
            <HeaderPartners />
            <HeaderVideo isHiddenOnDesk />
          </GeneralInfo>
        </Info>
        <Content>
          <HeaderTitle />
          <HeaderNavBar />
        </Content>
      </Container>
    </StyledHeader>
  );
};

export default Header;
