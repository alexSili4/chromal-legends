import { Links } from '@/constants';
import { FC } from 'react';
import LinkHighlight from '@/images/main/buy-online-link-highlight.svg?react';
import { Container, Content, Link, LinkTitle } from './BuyOnlineLink.styled';

const BuyOnlineLink: FC = () => {
  return (
    <Container>
      <Link
        href={Links.buyOnline}
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        <Content>
          <LinkTitle>Купуй онлайн</LinkTitle>
          <LinkHighlight />
        </Content>
      </Link>
    </Container>
  );
};

export default BuyOnlineLink;
