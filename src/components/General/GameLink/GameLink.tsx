import { FC } from 'react';
import { Links } from '@/constants';
import game from '@/images/about/game-min.png';
import {
  Accent,
  Container,
  Content,
  Link,
  Title,
  IconWrap,
  GameImg,
} from './GameLink.styled';
import QrCode from '@/icons/about/game-qr-code.svg?react';

const GameLink: FC = () => {
  return (
    <Link href={Links.game} target='_blank' rel='noopener noreferrer'>
      <Container>
        <GameImg src={game} alt='Логотип гри' />
        <Content>
          <Title>
            Завантажуй гру
            <br />
            <Accent>Сhroma Legends</Accent>
          </Title>
          <IconWrap>
            <QrCode />
          </IconWrap>
        </Content>
      </Container>
    </Link>
  );
};

export default GameLink;
