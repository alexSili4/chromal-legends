import { FC } from 'react';
import { Background, Image,Container } from './HeaderDecorativeBgImg.styled';
import heroes from '@/images/header/header-heroes.png';

const HeaderDecorativeBgImg: FC = () => {
  return (
    <Container>
      <Image src={heroes} alt='зображення героїв суперліги' />
      <Background></Background>
    </Container>
  );
};

export default HeaderDecorativeBgImg;
