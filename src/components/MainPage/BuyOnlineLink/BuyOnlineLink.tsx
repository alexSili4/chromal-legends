import { FC } from 'react';
import LinkHighlight from '@/images/main/buy-online-link-highlight.svg?react';
import { Container, Content, Link, LinkTitle } from './BuyOnlineLink.styled';
import { IProps } from './BuyOnlineLink.types';

const BuyOnlineLink: FC<IProps> = ({ href }) => {
  return (
    <Container>
      <Link href={href} target='_blank' rel='noopener noreferrer'>
        <Content>
          <LinkTitle>Купуй онлайн</LinkTitle>
          <LinkHighlight />
        </Content>
      </Link>
    </Container>
  );
};

export default BuyOnlineLink;
