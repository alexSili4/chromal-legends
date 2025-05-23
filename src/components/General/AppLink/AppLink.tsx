import { FC } from 'react';
import { Links } from '@/constants';
import app from '@/images/bonus-exchange/app-min.png';
import { Accent, Container, Image, Link, Title } from './AppLink.styled';

const AppLink: FC = () => {
  return (
    <Link href={Links.app} target='_blank' rel='noopener noreferrer'>
      <Container>
        <Image src={app} alt='Логотип додатка' />
        <Title>
          Завантажуй
          <br />
          <Accent>застосунок «Сільпо»</Accent>
        </Title>
      </Container>
    </Link>
  );
};

export default AppLink;
