import { FC } from 'react';
import {
  List,
  Container,
  Image,
  ListItem,
  Text,
  TextWrap,
  Title,
} from './GameLinkServices.styled';
import appStore from '@/images/about/app-store.png';
import googlePlay from '@/images/about/google-play.png';

const GameLinkServices: FC = () => {
  return (
    <List>
      <ListItem>
        <Container>
          <Image src={appStore} alt='App Store' />
          <TextWrap>
            <Text>Завантаж з</Text>
            <Title>App Store</Title>
          </TextWrap>
        </Container>
      </ListItem>
      <ListItem>
        <Container>
          <Image src={googlePlay} alt='Google Play' />
          <TextWrap>
            <Text>Завантаж з</Text>
            <Title>Google Play</Title>
          </TextWrap>
        </Container>
      </ListItem>
    </List>
  );
};

export default GameLinkServices;
