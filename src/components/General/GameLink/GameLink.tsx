import { FC } from 'react';
import { Links } from '@/constants';
import game from '@/images/about/game.png';
import qrCode from '@/images/about/qr-code.png';
import {
  Accent,
  Container,
  Content,
  GameImg,
  Link,
  Title,
  QRCode,
} from './GameLink.styled';

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
          <QRCode src={qrCode} alt='QR-код' />
        </Content>
      </Container>
    </Link>
  );
};

export default GameLink;
