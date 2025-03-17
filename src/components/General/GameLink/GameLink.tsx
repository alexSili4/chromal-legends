import { FC } from 'react';
import { Links } from '@/constants';
import game from '@/images/about/game-min.png';
import {
  Container,
  Content,
  Link,
  GameImg,
  QrCodeImg,
} from './GameLink.styled';
import qrCode from '@/images/about/game-qr-code.png';
import GameLinkServices from '@GeneralComponents/GameLinkServices';

const GameLink: FC = () => {
  return (
    <Link href={Links.game} target='_blank' rel='noopener noreferrer'>
      <Container>
        <GameImg src={game} alt='Логотип гри' />
        <Content>
          <GameLinkServices />
          <QrCodeImg src={qrCode} alt='QR-код для завантаження гри' />
        </Content>
      </Container>
    </Link>
  );
};

export default GameLink;
