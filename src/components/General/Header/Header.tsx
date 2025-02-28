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
import HeaderDecorativeBgImg from '@GeneralComponents/HeaderDecorativeBgImg';

const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderDecorativeBgImg />
      <Container>
        <Content>
          <Info>
            <Border></Border>
            <GeneralInfo>
              <HeaderPartners />
              <HeaderTitle />
            </GeneralInfo>
          </Info>
          <HeaderVideo />
        </Content>
        <HeaderNavBar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
