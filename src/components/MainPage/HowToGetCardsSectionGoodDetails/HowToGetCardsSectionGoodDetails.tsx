import { FC } from 'react';
import {
  Container,
  Image,
  ImgWrap,
  Link,
  Name,
  Price,
  TextWrap,
} from './HowToGetCardsSectionGoodDetails.styled';
import { IProps } from './HowToGetCardsSectionGoodDetails.types';

const HowToGetCardsSectionGoodDetails: FC<IProps> = ({
  good,
  img,
  price,
  name,
}) => {
  return (
    <Link href={good} target='_blank' rel='noopener noreferrer nofollow'>
      <Container>
        <ImgWrap>
          <Image src={img} alt={name} />
        </ImgWrap>
        <TextWrap>
          <Price>{price}</Price>
          <Name>{name}</Name>
        </TextWrap>
      </Container>
    </Link>
  );
};

export default HowToGetCardsSectionGoodDetails;
